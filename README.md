# Foodiebear Pet Feeder (Part II. Web App)

## 1. Project Overview
Foodiebear PetFeeder helps pet owners to stay connected with their loved ones whenever, wherever. This project includes a DIY pet feeder powered by Raspberry Pi, a MERN web app powered by Azure cloud platform, and an Alexa skill powered by AWS. Whether your pets need to be fed breakfast before you wake up, dinner while you're working late, or simply a treat when you are busy in the house, you should stay tuned to this awesome project :dog::cat::panda_face:

To learn more about this project, please read the initial product plan [here](https://gist.github.com/rinostar/a79a67ce073be1d7e5be2e4a55bb714e) or the final architecture diagram below:
![Foodiebear](https://user-images.githubusercontent.com/52188117/72955297-63148f00-3d93-11ea-8377-74b722fa7012.png)

## 2. Repo Description
This is the web app part of the FoodieBear Pet Feeder project. This repo contains the code for the MERN(Mongo-Express-React-Node.js) web app and instructions to deploy to Azure App Services, along with some learning resources for Azure cloud platform and etc.

## 3. Getting Started

Git clone this repo to the desired folder on your computer and use the latest version of VS Code to edit:

### a). Prerequisites
Open an account with Azure and add the following services to your account:
<br />- [App Service](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs)
<br />- [IoT hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal)
<br />- [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/create-mongodb-dotnet)

Create .env file in root folder and update the the following variables accordingly:
* IOTHUB_CONNECTION_STRING
* PORT
* DB_USERNAME
* DB_PASSWORD
* DB_CONNECTION_STRING
NOTE: TARGET_DEVICE=PyPi should be the default, unless you update the device name entirely throughout the project. 

### b). Dependencies
For the Express backend:
* axios
* azure-iothub
* body-parser
* cors
* cowsay
* dotenv
* express
* express-pino-logger
* mongoose
* node-schedule

For the React frontend:
* testing-library/jest-dom
* testing-library/react
* testing-library/user-event
* bootstrap
* react
* react-bootstrap
* react-flash-message
* serialize-javascript

<br />NOTE: Please use `$ npm install <library-name>` for needed libraries or `$ npm install all` for all libraires in the package.json file.

### c). Build & run the app locally
* cd to "react-fronted" folder and run the command `$ npm run build`
* cd back to root folder and run the command `$ npm start`

### d). Deploy to Azure App Services
* add "Azure Tools" extention to VS Code
* deploy from VS code [directly](https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-app-service-node-01)

### e). Learning Resources
MERN App & Azure App Services:
* ["Creating MERN Stack App and Hosting In Microsoft Azure using Create-React-App w/ Continuous Integration"](https://medium.com/@chrisjr06/creating-mern-stack-app-and-hosting-in-microsoft-azure-using-create-react-app-w-continuous-4acef0c87e71)
* ["Deploy to Azure App Service using Visual Studio Code"](https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-app-service-node-01)
* ["How to connect your React app to a backend on the same origin"](https://flaviocopes.com/how-to-serve-react-from-same-origin/)
* ["Deploying a Client-Side Rendered create-react-app to Microsoft Azure"](https://css-tricks.com/deploying-a-client-side-rendered-create-react-app-to-microsoft-azure/)

Azure IoT Hub:
* ["What is Azure IoT Hub?"](https://docs.microsoft.com/en-us/azure/iot-hub/about-iot-hub)
* ["Quickstart: Send telemetry from a device to an IoT hub and read it with a back-end application (Node.js)"](https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-node)

Azure Cosmo DB:
* ["Azure Cosmos DB's API for MongoDB"](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction)

## 4. Other Repos:
* Part I. Hardware: https://github.com/rinostar/capstone_petfeeder
* Part III. Alexa Feature: https://github.com/rinostar/capstone-petfeeder-alexa

## 5. Author & Contact
Github: [@rinostar](https://github.com/rinostar)
<br />Email: codingrinostar@gmail.com

## 6. Acknowledgments
In addition to authors of the links mentioned above, I want to thank: 
* [diy petfeeder](https://www.youtube.com/channel/UCnDOhfA1Y8OODhTrmgLJAcg) on Youtube for the inspiration,
* [redklouds](https://github.com/redklouds) on Github for the collaboration, 
* and [Ada](https://adadevelopersacademy.org/) community for the support.

Thank you! Until next time 🌟

