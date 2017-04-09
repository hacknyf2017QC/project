var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){

});

mongoose.connect('mongodb://127.0.01:27017');

var vehicalSchema = new mongoose.Schema({
  _id : {
    type: String
    required: true
    unique: true
  },
  make: {
    type: String
    required: true
  },
  year: {
    type: Number
    required: true
  },
  model: {
    type: String
    required: true
  }
});

var vehicle = mongoose.model('vehicle', vehicleSchema);

//Example:

var vehicle1 = new vehicle({
  _id: 'GZJ8189-NY';
  make: 'Honda';
  year: 2015;
  model: 'Civic';
})

/*Queries*/
db.Vehicle.insert({
  _id: {
    type: String
    required: true
    unique: true
  }
  make: {
    type: String
    required: true
  }
  year: {
    type: Number
    required: true
  }
  model: {
    type: String
    required: true
  }
});

db.Vehicle.getVehicle({ _id: String }, function(err, user){

    if(err) return console.error(err);
    console.dir(user);(e)
});

db.Vehicle.updateAll({'_id' : 'STRING'}, {$set{<UPDATED DATA>}}, {multi:true});
db.Vehicle.update({'make' : 'STRING'},  {$set{<UPDATED DATA>}});
db.Vehicle.update({'year' : 'Number'},  {$set{<UPDATED DATA>}});
db.Vehicle.update({'model' : 'STRING'}, {$set{<UPDATED DATA>}});
