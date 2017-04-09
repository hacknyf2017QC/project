var express = require('express')
    , app = express()
    , mongoose = require('mongoose')
    , bodyParser = require('body-parser')
    , http = require('http')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , LocalStrategy = require('passport-local').Strategy;
mongoose.connect('mongodb://localhost:27017/car');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');


app.use(expressSession({secret: 'mySecretKeycar'}));
app.use(passport.initialize());
app.use(passport.session());

 // Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./login/auth-init');
initPassport(passport);
var api = require('./Api/api',passport);
app.use('/Api', api);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//set port
var port = process.env.PORT || 3000;
//define prefix for API routes, 

app.listen(port, function () {
    console.log("Express server listening on port " + port);
});