const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
  device: String,
  feedTime: String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
