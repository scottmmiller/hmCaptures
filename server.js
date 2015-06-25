"use strict";

var Express = require("express");
var BodyParser = require("body-parser");
var Passport = require("passport");
var Mongoose = require("mongoose");
var Session = require("express-session");

var app = Express();
var port = process.env.HMCAPTURES_PORT || 9999;
  console.log("EXPRESS_PORT: " + port)
var mongoUri = "";

//    *****MIDDLEWARE*****
app.use(Session ({
  secret: "hmCaptures",
  resave: true,
  saveUninitialized: true
}));

//    *****STRATEGIES*****

//    *****CONNECTIONS*****
Mongoose.connect(mongoUri, function() {
  console.log("DB connected on " + mongoUri)
})

app.listen(port, function() {
  if(port === process.env.EXPRESS_PORT) {
    console.log("Listening on EXPRESS_PORT");
  } else {
    console.log("Listening on 9999")
  }
})

// var http = require("http");
//
// http.createServer(function(req, res) {
//
//
// }).listen(80);
