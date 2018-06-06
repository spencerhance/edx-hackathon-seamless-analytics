# Setup
In order to access the HipChat API, you need to setup an access token [here](https://edx.hipchat.com/account/api)
Alternatively, you can use their OATH flow, but that's a bit unecessary for this hackathon.

On the api site, create a new "View Messages" auth key

`pip3 install -r requirements.txt`

`./download-data.py auth_key room_id`

