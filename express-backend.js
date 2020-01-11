const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const IOTHUB_CONNECTION_STRING = require('./.env');
const TARGET_DEVICE = require('./.env');

// Create the server
const app = express()
// Serve our api route /cow that returns a custom talking text cow
app.use(bodyParser.urlencoded({ extended: false }));
// for debugging 
app.use(pino); 

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'react-frontend/build')))
// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/react-frontend/build/index.html'))
})

app.get('/api/feed', (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ data: "HELLO" }));
    res.setHeader('Content-Type', 'application/json');
    let Client = require('azure-iothub').Client;
    if (!IOTHUB_CONNECTION_STRING) {
      console.log('Please set the IOTHUB_CONNECTION_STRING environment variable.');
      process.exit(-1);
    }
    if (!TARGET_DEVICE) {
      console.log('Please set the TARGET_DEVICE environment variable.');
      process.exit(-1);
    }
    let methodParams = {
      methodName: 'feed',
      payload: 'petfeeder',
      responseTimeoutInSeconds: 15 // set response timeout as 15 seconds
    };
    let client = Client.fromConnectionString(IOTHUB_CONNECTION_STRING);
    client.invokeDeviceMethod(TARGET_DEVICE, methodParams, function (err, result) {
      if (err) {
        console.error('Failed to invoke method \'' + methodParams.methodName + '\': ' + err.message);
        res.send(JSON.stringify({ data: err }));
      } else {
        console.log(methodParams.methodName + ' on ' + targetDevice + ':');
        console.log(JSON.stringify(result, null, 2));
        res.send(JSON.stringify({ data: result }));
      }
    });
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`React-Express running on port ${PORT}...`)
})