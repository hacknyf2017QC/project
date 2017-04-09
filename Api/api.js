var express = require('express');
var router = express.Router();
var user = require('./model/user');
var car = require('./model/vehicle);
        /*************** API ******************/
        router.route('/user/signup').post(function (req, res) {
            user.create({
                //set values from usermodel
                firstName: req.body.firstName
                , lastName: req.body.lastName
                , email: req.body.email
                , password: req.body.password
                , signUpDate: req.body.signUpDate;
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
               lic: req.body.lic,
               state: req.body.state;
               
               
           },function(err,data){
               res.send(err);
           }); 
            
        });










module.exports = router;