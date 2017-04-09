var mongoose = require('mongoose');
var Schema= mongoose.Schema;


var vehicleSchema = new mongoose.Schema({
  _id : {
    type: String,
    required: true,
    unique: true
  },
  make: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  model: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('vehicle', vehicleSchema);

