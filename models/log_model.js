const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  device: String,
  fedTime: String
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;
