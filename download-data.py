#!/usr/bin/env python3

import csv
from datetime import datetime, date
import requests

# View messages permissions
AUTH_TOKEN = ""

ROOM_URL = "https://api.hipchat.com/v2/room/ID/history"

def parse_restaurant_name(text):
    """
    Grab the restaurant name by looking after the exclamation and before the 'is here'
    Could be replaced by searching for each restaurant in the stringt
    """
    return text.split('!')[-1].split('is here')[0].strip()

def request_messages():
    """
    Request messages up until the earliest date, or if no messages are returned
    """
    params = {'auth_token': AUTH_TOKEN, 'max_results': 1000, 'end_date': "null"}

    resp = requests.get(ROOM_URL, params=params)

    assert resp.status_code == 200, "First API request returned a non 200 status code"

    messages = resp.json()['items']
    
    # Just grab a fixed number of iterations for now
    for i in range(0, 5):
        # Items are returned oldest first
        current_date = messages[0]['date']

        params['end_date'] = current_date
        resp = requests.get(ROOM_URL, params=params)
        
        # Add to our running list
        for message in resp.json()['items']:
            messages.append(message)

    return messages

def main():
    """ Download the data """
    messages = request_messages()

    # Filter by the common expression is here, could also limit to Eudarck and Bruno's user IDs
    #messages = [x for x in data['items'] if x['message'] and 'is here' in x['message']]
    messages = [x for x in messages if x['message'] and 'is here' in x['message']] 

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
