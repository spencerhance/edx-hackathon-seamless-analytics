#!/usr/bin/env python3

import csv
from datetime import datetime, date
import sys

import requests
 
def parse_restaurant_name(text):
    """
    Grab the restaurant name by looking after the exclamation and before the 'is here'
    Could be replaced by searching for each restaurant in the stringt
    """
    return text.split('!')[-1].split('is here')[0].strip()

def request_messages(auth_token, room_id):
    """
    Request messages up until the earliest date, or if no messages are returned
    """
    params = {'auth_token': auth_token, 'max_results': 1000, 'date': "recent"}
    
    room_url = "https://api.hipchat.com/v2/room/{}/history".format(room_id)
    
    resp = requests.get(room_url, params=params)
    
    assert resp.status_code == 200, "First API request returned a non 200 status code"

    messages = resp.json()['items']
    
    # Just grab a fixed number of iterations for now
    # FIXME currently the date ranges are not working as expected
    for i in range(0, 5):
        # Items are returned oldest first
        current_date = messages[0]['date']

        params['end_date'] = current_date
        resp = requests.get(room_url, params=params)
        
        # Add to our running list
        for message in resp.json()['items']:
            messages.append(message)

    return messages

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

        for message in messages:
            restaurant = parse_restaurant_name(message['message'])

            if not restaurant:
                print("Unable to parse restaurant from message: {}".format(message['message']))
                continue

            info = (restaurant, message['date'])
            csv_writer.writerow(info)


if __name__ == "__main__":
    main()
