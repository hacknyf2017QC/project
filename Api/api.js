var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var localStra = require('passport-local').Strategy;
var user = require('./model/userModel');
var car = require('./model/vehicleModel');
var messages =require('../Messages/messages')
/*************** API ******************/
router.route('/user/signup').post(function (req, res) {
    user.create({
        //set values from usermodel
        firstName: req.body.firstName
        , lastName: req.body.lastName
        , _id: req.body.email
        , password: req.body.password
        , signUpDate: req.body.signUpDate
        , verification: false
    }, function (err, data) {
        res.send(err);
    });
});
router.route('/user/newcar').post(function (req, res) {
    car.create({
        userid: req.body.userid
        , make: req.body.make
        , model: req.body.model
        , year: req.body.year
        , _id: req.body.license
        
    }, function (err, data) {
        res.send(err);
    });
});

router.route('/user:id')
  //find user data
  .get(function(req, res){
    user.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      res.send(data);
    });
  });

router.route('/car/findcar/:id')
//find owner of car
.get(function(req, res){
   car.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      res.send(data);
    });
  });


router.route('/connectionsms/', messages);

router.route('/user/login').post
module.exports = router;