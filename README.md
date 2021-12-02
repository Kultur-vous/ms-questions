# Micro-service questions

DANVERS Martin & GAUTRON Marie

## Url deployed

https://boo-question.herokuapp.com/

## Install dependencies

`yarn`

## You might need

Node 14+ : `nvm use 14`

Error : `[nodemon] failed to start process, "ts-node" exec not found`

Solution : Install ts-node `npm install -g ts-node`

## Run local

`yarn dev`

Add `.env` :

```
PORT=3000
MONGO_USERNAME=admin
MONGO_PASS=CfQ8q6N59w6FHCt
MONGO_DB=users
```

## Endpoints

### Get questions

`GET /questions?level=""&nbQuestion=""&category=""`

Headers :

```
Authorization: 'Bearer ${token}'
email: ""
```

### Get categories

`GET /categories`

### Get levels

`GET /levels`
