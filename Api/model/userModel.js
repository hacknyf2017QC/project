var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');



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


userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);

