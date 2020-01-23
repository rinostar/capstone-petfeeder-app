# Foodiebear Petfeeder
Pets bring compaionship, health, and just pure joy in our lives. That's why it's important to take care of our friends, despite our increasingly busy life-style. Foodiebear Petfeeder provides pet owners the freedom to feed their loved ones whenever, wherever. This project includes a DIY pet feeder powered by raspberry pi, a MERN web app powerd by Azure cloud platform, and a Alexa skill powered by AWS Lambda. Whether your pets need to be fed breakfast before you wake up, dinner while you're working late, or simply a treate when you are busy in the house, you should stay tuned and support this awesome porject :) 

## 1. Prerequisite
Open an Azure account for setup services for:
* [App Service] (https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs)
* [IoT hub] (https://docs.microsoft.com/en-us/azure/iot-hub/quickstart-send-telemetry-node)
* [Azure Cosmos DB] (https://docs.microsoft.com/en-us/azure/cosmos-db/create-mongodb-dotnet)

## 2. DIY Pet Feeder
Materials:
* Raspberry Pi 2 Revision B (w/ SD Card, Wifi Adapter)
* [L298N Motor Driver](https://www.amazon.com/Controller-H-Bridge-Stepper-Mega2560-Duemilanove/dp/B01BWLICV4/ref=sr_1_2_sspa?keywords=kuman+l298n+driver&qid=1579745184&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE0Qk9EOTZKMVpTTkImZW5jcnlwdGVkSWQ9QTAzOTUyNzQyQlFGNTlMTkk5NzdFJmVuY3J5cHRlZEFkSWQ9QTA2MjkzNzI5TkpKSUpHNTVBUTEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl)
* [DC Motor](https://www.amazon.com/gp/product/B00B1KXV3Q/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=diypetfeeder-20&creative=9325&linkCode=as2&creativeASIN=B00B1KXV3Q&linkId=756daa6a2c6ccf261b6fed7343b18aa8)
* [Motor Coupler](https://www.amazon.com/a15102700ux1222-Aluminium-Coupling-Connector-Aluminum/dp/B019DCWGUW)
* [Food Dispenser](https://www.amazon.com/gp/product/B000NW5RRG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=diypetfeeder-20&creative=9325&linkCode=as2&creativeASIN=B000NW5RRG&linkId=7a9d90a3d771dbb2afa7379dab8f39fe)
* [Breadboard Jumper Wires](https://www.amazon.com/MCIGICM-Breadboard-Jumper-Wires-Female/dp/B07PLZC26F/ref=sr_1_5?keywords=mcigicm+breadboard+jumper+wires&qid=1579745144&sr=8-5)
* [AC Adapter](https://www.amazon.com/100-240V-Transformers-Switching-Applications-Connectors/dp/B077PW5JC3)

Connect Pi with the DC motor through L298N driver:
<br />https://www.youtube.com/watch?v=2bganVdLg5Q
<br />https://howchoo.com/g/mjg5ytzmnjh/controlling-dc-motors-using-your-raspberry-pi

Remote Access to Pi & Setup Wifi:
<br />https://electricnoodlebox.wordpress.com/tutorials/remote-view-your-raspberry-pi-on-mac-using-vnc/
<br />https://learn.adafruit.com/adafruits-raspberry-pi-lesson-3-network-setup/setting-up-wifi-with-occidentalis

Python code:
<br />https://github.com/rinostar/capstone_petfeeder
<br />Note:
* create .env file and update your Azure IoT Hub info accordingly
* cd to the file on Pi and run command `$ python3 <filename>`

## 3. MERN Web App
Run Locally:
1. git clone the above repo
2. npm install all depedencies (both for react & express)
3. cd to "react-fronted" folder and run the command `$ npm run build`
4. cd back to root folder; create and update .env file accordingly
5. Run the command `$ npm start`

or...

Deploy to Azure App Services:
1. follow step 1- 4 from previous instruction
2. add "Azure Tools" extention to VS Code
3. deploy: https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-app-service-node-01

Repo on Github: https://github.com/rinostar/capstone-petfeeder-app
Live on Azurewebsites: https://foodiebear.azurewebsites.net/
Reference: https://medium.com/@chrisjr06/creating-mern-stack-app-and-hosting-in-microsoft-azure-using-create-react-app-w-continuous-4acef0c87e71

## 4. Alexa Skill
Please follow instruction on [Alexa Developer Console] (https://developer.amazon.com/alexa/console/ask)

Python code for Lambda fucntion:
<br />https://github.com/rinostar/capstone-petfeeder-alexa

Note: Be sure to use the same email address for your developer console and your alexa. After deployment, the new Alexa skill will be available on your Alexa device automatically. Thanks, Alexa.

## 5. Architecture Diagram
![Foodiebear](https://user-images.githubusercontent.com/52188117/72954152-59892800-3d8f-11ea-93fb-0dc0c7a37563.png)

### Author
[Yitgop Y.](https://www.linkedin.com/in/yitgopyyhxox/)

### Acknowledgments
In addition to authors of the links mentioned above, I want to thank: 
[diy petfeeder](https://www.youtube.com/channel/UCnDOhfA1Y8OODhTrmgLJAcg) on Youtube for the inspiration, [redklouds](https://github.com/redklouds) on github for the collobration, and [Ada](https://adadevelopersacademy.org/) community for the support.

Thank you! Until next time 🌟
