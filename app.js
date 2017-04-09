var express = require('express')
    , app = express()
    , mongoose = require('mongoose')
    , bodyParser = require('body-parser')
    , http = require('http')
    , api = require('./Api/api')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost:27017/car');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'stolen car',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//set port
var port = process.env.PORT || 3000;
//define prefix for API routes, 
app.use('/Api', api);
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});