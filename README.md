# IIT-J Token System

## Purpose
This project was aiming to create a Token system for the IIT-J community. Which can be exchanged by the coupons available. Whenever a person performed better or attended a seminar tokens would be given to him, by collecting the tokens he can exchange them for coupons.

## How to setup
1. Clone the repository

### For backend
In this project we are using docker
So to start working on this project follow these commands

* Make sure that you have installed docker and docker daemon is running in background
* go to the directory where **Dockerfile** and **docker-compose.yml** is present
* Run the following commands
```
docker build -t iitj .
docker compose up --build
```
It will take time....

Once you see the message
**"Database Connected..."**
in terminal, you are ready to go.

Your app is now running on 
```http://localhost:8080/```

### For frontend
* go to the directory where **package.json** is present
* Run the following commands
```
npm install
npm start
```
Your app is now running on 
```http://localhost:3000/```


## Tech stack used
* MongoDB
* ReactJS
* GoLang
* Docker

## collaborators

| Name | Year | Role | 
| --- | --- | --- |
| [Rahul Gopathi](https://github.com/RahulGopathi) | Pre-final | Mentor |
| [Piyush Jhamnani](https://github.com/PJiyush) | sophomore | Developer |

