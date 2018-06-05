#!/usr/bin/env python3

import csv
from datetime import datetime, date
import sys

import requests

RESTAURANT_NAMES = [
    "India Palace",
    "Pavia",
    "Falafel Place",
    "Thelonius Monkfish",
    "Royal East Restaurant",
    "Alfredo's",
    "Veggie Crust",
    "Bailey and Sage",
    "Tossed",
    "Beantown Taqueria",
    "Cafe 472",
    "Beijing Tokyo",
    "Viva Burrito",
    "Golden Temple",
    "Momo N Curry",
    "Veggie Crust",
    "Los Paisanos",
    "Sugar and Spice",
    ]

def parse_restaurant_name(text):
    """
    Grab the restaurant name by looking after the exclamation and before the 'is here'
    Could be replaced by searching for each restaurant in the stringt
    """
    return text.split('!')[-1].split('is here')[0].strip()

def request_messages(auth_token, room_id):
    """
    Request up to 1000 messages
    """
    params = {'auth_token': auth_token, 'max-results': 1000, 'start-index': 0}
    
    room_url = "https://api.hipchat.com/v2/room/{}/history".format(room_id)
    
    resp = requests.get(room_url, params=params)
    
    assert resp.status_code == 200, "First API request returned a non 200 status code"

    return resp.json()['items']

def main():
    """ Download the data """
    
    # Parse cmd line args
    assert len(sys.argv) == 3, "Not enough arguements"
    auth_token = sys.argv[1]    
    room_id = sys.argv[2]

    # Get all of the messages
    messages = request_messages(auth_token, room_id)

    # Filter by the common expression is here, could also limit to Eudarck and Bruno's user IDs
    messages = [x for x in messages if x['message'] and 'is here' in x['message']] 

    # Write restaurant,date to csv
    with open('message-data.csv', 'w') as output_file:
        csv_writer = csv.writer(output_file)
        csv_writer.writerow(["restaurant", "datetime"]) # Header

        for message in messages:
            restaurant = parse_restaurant_name(message['message'])

            if not restaurant:
                print("Unable to parse restaurant from message: {} on date {}".format(
                    message['message'], message['date']))
                continue

            info = (restaurant, message['date'])
            csv_writer.writerow(info)


if __name__ == "__main__":
    main()
