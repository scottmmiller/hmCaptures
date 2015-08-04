"use strict";

//    NPM CONNECT
var Express = require("express");
var BodyParser = require("body-parser");
var connect = require("connect");
var serveStatic = require("serve-static");
var http = require("http");

var app = connect();

var port = process.env.HMCAPTURES_PORT || 9999;

app.use(serveStatic(__dirname)).listen(port);
   console.log("hmCaptures Server running on: " + port);
