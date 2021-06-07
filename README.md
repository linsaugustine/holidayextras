# Node server for adding listing, updating user info

# Add User - sample

Url: http://localhost:9000/api/v1/user\
method: post\
Headers: Content-Type/application/json\
body: {
"email": "newguy1212@gmail.com",
"givenName": "first1212",
"familyName": "family1212",
"created": "2021-06-03T20:59:33.917Z"
}

# List Users - sample

Url: http://localhost:9000/api/v1/users\
method: get

# get one user based on uuid - sample

Url: http://localhost:9000/api/v1/user/4de8b8c3-cd35-4662-a0ae-0e98fc8e5f24\
method: get

# delete User - sample

Url: http://localhost:9000/api/v1/user/4de8b8c3-cd35-4662-a0ae-0e98fc8e5f24\
method: delete

# Update User - sample

Url: http://localhost:9000/api/v1/user/60988774-4be0-4336-9af8-9a89aaf8dc55\
method: patch\
Headers: Content-Type/application/json\
body: {
"email": "newguy11111@gmail.com",
"givenName": "first11111",
"familyName": "family11111",
"created": "2021-06-03T20:59:33.927Z",
"id": "60988774-4be0-4336-9af8-9a89aaf8dc55"
}
