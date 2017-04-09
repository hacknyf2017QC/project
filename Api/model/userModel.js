var mongoose = require('mongoose');
var Schema= mongoose.Schema;



var userSchema = new mongoose.Schema({
  _id : {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  verification: {
    type: Boolean,
    required: true
  },
 signUpDate: {
    type: Date,
    requored: true
}    

});


module.exports = mongoose.model('User', userSchema);

