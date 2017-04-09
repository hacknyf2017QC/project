var express = require('express')
    , app = express()
    , mongoose = require('mongoose')
    , bodyParser = require('body-parser')
    , http = require('http')
    , api = require('./Api/api')


//set port
var port = process.env.PORT || 3000;
//define prefix for API routes, 
app.use('/Api', api);
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});