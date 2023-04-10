# iitj-token-system
Utility web app of IITJ token system

## For developers
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


