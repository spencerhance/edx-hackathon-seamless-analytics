import csv
from datetime import datetime

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

def main():
    file = open('message-data.csv', 'rU')
    reader = csv.DictReader(file, delimiter=',')
    count_instances(reader)
    file.close()

if __name__ == "__main__":
    main()
