require('dotenv').config();
require('./db-conn.js');
const express = require('express');
const bodyParser = require('body-parser');
const connectionString = process.env.IOTHUB_CONNECTION_STRING;
const targetDevice = process.env.TARGET_DEVICE;
const schedule = require('node-schedule');
const Log = require('./models/log_model');
const Appointment = require('./models/appointment_model');
let Client = require('azure-iothub').Client;

// Create the server
const app = express();
// Serve our api route
app.use(bodyParser.urlencoded({ extended: false }));
const path = require('path');
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'react-frontend/build')));
// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/react-frontend/build/index.html'))
});

// Endpoints for future feeding
app.get('/api/appointments', (req, res, next) => {
  Log.find({}, (err, logs) => {
    if (err) next(err);
    else res.json(logs);
  });
});

app.post('/api/appointments/add', (req, res, next) => {
  console.log(req.body);
  const newAppointment = new Appointment({
    device: req.body.device,
    feedTime: req.body.feedTime,
  });

  let tA = req.body.feedTime.split(/[-T:]+/);
  tA[1] = tA[1] - 1;
  tA.push(0);
  let timeData = new Date(tA[0], tA[1], tA[2], tA[3], tA[4], tA[5]);
  schedule.scheduleJob(timeData, feedN);

  newAppointment.save(err => {
    if (err) next(err);
    else res.json({ newAppointment, msg: 'Appointment successfully saved!' });
  });
});

// Endpoinyts for past feeding
app.get('/api/logs', (req, res, next) => {
  Log.find({}, (err, logs) => {
    if (err) next(err);
    else res.json(logs);
  });
});

app.post('/api/logs/add', (req, res, next) => {
  console.log(req.body)
  const newLog = new Log({
    device: req.body.device,
    fedTime: req.body.fedTime,
  });
  newLog.save(err => {
    if (err) next(err);
    else res.json({ newLog, msg: 'Log successfully saved!' });
  });
});

async function feedN(){
  console.log("HERE WE ARE")
  
  if (!connectionString) {
    console.log('Please set the IOTHUB_CONNECTION_STRING environment variable.');
    process.exit(-1);
  }

  if (!targetDevice) {
    console.log('Please set the TARGET_DEVICE environment variable.');
    process.exit(-1);
  }

  let methodParams = {
    methodName: 'feed',
    payload: 'petfeeder',
    responseTimeoutInSeconds: 15 // set response timeout as 15 seconds
  };

  let client = Client.fromConnectionString(process.env.IOTHUB_CONNECTION_STRING);
  var result;
  await client.invokeDeviceMethod(process.env.TARGET_DEVICE, methodParams, function (err, result) {
    console.log("IN FUNC");
    if (err) {
      console.error('Failed to invoke method \'' + methodParams.methodName + '\': ' + err.message);
      let methodRes = JSON.stringify({ data: err });
      result = methodRes;
      return methodRes;
    } else {
      console.log(methodParams.methodName + ' on ' + targetDevice + ':');
      let methodRes = JSON.stringify({ data: result });
      result = methodRes;
      return methodRes;
    }
  });
  return result;
}
function lovely(){
  console.log("THIS IS LOVELY");

  if (!connectionString) {
    console.log('Please set the IOTHUB_CONNECTION_STRING environment variable.');
    process.exit(-1);
  }

  if (!targetDevice) {
    console.log('Please set the TARGET_DEVICE environment variable.');
    process.exit(-1);
  }

  let methodParams = {
    methodName: 'feed',
    payload: 'petfeeder',
    responseTimeoutInSeconds: 15 // set response timeout as 15 seconds
  };
  let client = Client.fromConnectionString(process.env.IOTHUB_CONNECTION_STRING);

  

  return "lovely"
}
// Endpoint for feed request to device through IoT hub
app.get('/api/feed/', async (req, res)=> {
  try{
    //const result = await feedN();
    //await console.log(result);
    const love = await lovely();
    console.log(love);
    
    //console.log(result);
    console.log('Finished Feeding')
    //res.setHeader('Content-Type', 'application/json');
    //res.send(result);
  }catch(error){
    console.log(error);
  }

});

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`React-Express running on port ${PORT}...`);
});