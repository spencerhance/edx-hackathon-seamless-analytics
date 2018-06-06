# Setup
In order to access the HipChat API, you need to setup an access token [here](https://edx.hipchat.com/account/api)
Alternatively, you can use their OATH flow, but that's a bit unecessary for this hackathon.

On the api site, create a new "View Messages" auth key

`pip3 install -r requirements.txt`

# Run

1. `./download-data.py auth_key room_id`

2. `./analytics.py`

3. To run the flask API to serve the example data:
    `export FLASK_APP=app.py`

    `flask run`

4. Open up http://127.0.0.1:5000/data/example

