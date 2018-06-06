#!/usr/bin/env python3

import csv
from datetime import datetime, date
import sys

import requests

RESTAURANT_NAMES = [
    ["India Palace", "Indian Palace"],
    ["Pavia"],
    ["Falafel Place", "Falafel"],
    ["Thelonius Monkfish", "Monkfish", "Thelonious"],
    ["Royal East Restaurant", "Royal East"],
    ["Alfredo's"],
    ["Veggie Crust"],
    ["Bailey and Sage", "Bailey & Sage"],
    ["Tossed"],
    ["Beantown Taqueria", "Beantown"],
    ["Cafe 472", "472"],
    ["Beijing Tokyo"],
    ["Viva Burrito"],
    ["Golden Temple"],
    ["Momo N Curry"],
    ["Veggie Crust"],
    ["Los Paisanos"],
    ["Sugar and Spice", "Sugar & Spice"],
    ["Mr. B's"],
    ["Bertucci's"]
    ]

def parse_restaurant_name(text):
    """
    Grab the restaurant name by looking for each specified restaurant (and its variations) in the string
    """
    stripped = text.lower()

    for name_list in RESTAURANT_NAMES:
        for name in name_list:
            if name.lower() in stripped:
                return name_list[0]

    return ""



def request_messages(auth_token, room_id):
    """
    Request up to 1000 messages
    """

    params = {'auth_token': auth_token, 'max-results': 1000, 'start-index': 0, 'date': "recent",
            'timezone': "America/New_York", 'reverse': True}

    results = []

    room_url = "https://api.hipchat.com/v2/room/{}/history".format(room_id)

    for i in range(0, 5):
        resp = requests.get(room_url, params=params)

        resp_json = resp.json()

        assert resp.status_code == 200, "API request returned a non 200 status code"

        for item in resp_json['items']:
            results.append(item)

        current_date = resp_json['items'][0]['date']
        params['date'] = current_date

    return results

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
