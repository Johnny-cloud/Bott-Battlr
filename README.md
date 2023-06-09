# Bot Battlr

**Written on 29/04/23**\
**By John Kipruto**

## About the project

It is a web app that allows a user to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

## Technologies used

* React
* Fetch API
* Json server

## How to run the project

1. Make sure you have node installed on your machine.
2. Download the json-server using the command "npm install -g json-server". This will ensure the server is installed globally on   the machine.
3. Fork and clone this repository to your local machine.
4. Cd into this repository.
5. Run the command "npm install" to install the project's dependencies
6. The data to be used is in the **src/data/db.json** folder.
7. Run the command **"json-server --watch src/data/db.json"** to start up the json-server on port 3000. This is where you will get the data to be used.
8. Run the command "npm start" in the root folder to start up the project. It will ask you to run the project on another port in the localhost. Just type in "y" for yes. This is because the Json-server will run on port 3000.
