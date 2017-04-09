var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var passport = require('passport');
var localStra = require('passport-local').Strategy;


var user = require('./model/userModel');
var car = require('./model/vehicleModel');

        /*************** API ******************/
        router.route('/user/signup').post(function (req, res) {
            user.create({
                //set values from usermodel
                firstName: req.body.firstName
                , lastName: req.body.lastName
                , email: req.body.email
                , password: req.body.password
                , signUpDate: req.body.signUpDate
            }, function (err, data) {
                res.send(err);
            });
        }); 

        router.route('/user/newcar').post(function(req,res){
            
           car.create({
              userid: req.body.userid,
               make:    req.body.make,
               model:   req.body.model,
               year:    req.body.year,
               lic:     req.body.lic,
               state: req.body.state
               
               
           },function(err,data){
               res.send(err);
           }); 
            
        });
        

        

        router.route('/user/login').post







module.exports = router;