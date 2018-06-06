import csv
import json
from datetime import datetime
import pandas as pd

def count_instances(reader):
    """
    Count and print the number of messages received for each restaurant
    :param reader:
    :return:
    """
    rest_dict = dict()
    for row in reader:
        restaurant = row['restaurant']
        #raw_time = row['datetime'][:19]
        #time = datetime.strptime(raw_time, '%Y-%m-%dT%H:%M:%S')

        if restaurant in rest_dict:
            rest_dict[restaurant] += 1
        else:
            rest_dict[restaurant] = 1
    print(rest_dict)

def get_time_delta_from_expected(dayofweek, hour, minute):
    """Get the time delta from the expected time based on the day of the week
    """
    total_minutes = hour * 60 + minute
    
    if dayofweek == "Monday" or dayofweek == "Thursday":
        return total_minutes - (12 * 60)
    elif dayofweek == "Wednesday":
        return total_minutes - (12 * 60 + 30)
    else:
        return -1

def process_data(filename):
    """Add a bunch of features to the data"""
    with open(filename) as input_file:
        df = pd.read_csv(input_file)

    df['datetime'] = df['datetime'].apply(pd.Timestamp)
    df['dayofweek'] = df['datetime'].apply(lambda x: x.day_name())
    df['hour'] = df['datetime'].apply(lambda x: x.hour)
    df['minute'] = df['datetime'].apply(lambda x: x.minute)
    df['delta'] = df.apply(lambda row: get_time_delta_from_expected(
        row['dayofweek'], row['hour'], row['minute']), axis=1)

    return df

def convert_df_to_dict(df):
    """ Convert dataframe to dict object"""
    result_dict = {'restaurants': []}
    restaurants = df.restaurant.values

    for restaurant in restaurants:
        avg_delta = df[df.restaurant == restaurant]['delta'].mean()
        timestamps = [x.strftime("%Y-%m-%dT%H:%M:%S.%fZ") for x in df[df.restaurant == restaurant]['datetime']]
        deltas = df[df.restaurant == restaurant]['delta']
        
        rest_result = {
                       'name': restaurant,
                       'avg_delta': avg_delta,
                       'log': [{'timestamp': x, 'delta': y} for x,y in zip(timestamps, deltas)]
                       }

        result_dict['restaurants'].append(rest_result)
    
    return result_dict

def main():
    df = process_data('message-data.csv')
    json_df = convert_df_to_dict(df)
    
    with open('processed-data.json', 'w') as output_file:
        json.dump(json_df, output_file, indent=4, separators=(',', ': '))

    #file = open('message-data.csv', 'rU')
    #reader = csv.DictReader(file, delimiter=',')
    #count_instances(reader)
    #file.close()

if __name__ == "__main__":
    main()
