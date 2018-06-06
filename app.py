from flask import Flask
import json

app = Flask(__name__)

@app.route("/data/example", methods=['GET'])
def get_example_data():
    with open('processed-data.json') as input_file:
        data = json.load(input_file)

    response = app.response_class(
            response=json.dumps(data),
            status=200,
            mimetype='application/json'
            )

    return response




