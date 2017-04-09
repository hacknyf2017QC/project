var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){

  // create models and schema here
});

mongoose.connect('mongodb://127.0.0.1:27017');

var userSchema = new mongoose.Schema({
  _id : {
    type: String
    required: true
    unique: true
  },
  password: {
    type: String
    required: true
  },
  name: {
    type: String
    required: true
  },
  verification: {
    type: Boolean
    required: true
  }

});


var User = mongoose.model('User', userSchema);

//Example:

var user1 = new User({
  _id: 'pratm9293@yahoo.com';
  password: '1234567';
  name: 'Prateek';
  verification: true;

});

//Insert User

db.User.insert({
  _id: {
    type: String
    required: true
    unique: true
  },
  password: {
    type: String
    required: true
  },
  name: {
    type: String
    required: true
  },
  verification: {
    type: Boolean
    default: false
  }
});

//Retrieve user

db.User.getUser({_id : String}, function(err, user){

  if(err) return console.error(err);
  console.dir(user);(e)

});

db.User.updateAll( {'_id' : 'STRING'}, {$set{<UPDATED DATA>}}, {multi: true});

db.User.update({'password' : 'STRING'}, {$set{<UPDATED DATA}});
db.User.update({'name' : 'String'}, {$set{<UPDATED DATA>}});
