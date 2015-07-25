"use strict";

//    NPM CONNECT
var Express = require("express");
var BodyParser = require("body-parser");
var connect = require("connect");
var serveStatic = require("serve-static");
var http = require("http");

var app = connect();

var port = process.env.HMCAPTURES_PORT || 9999;

// var onRequest = function(req, res) {
// 	if(req.method === "GET") {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		})
// 		res.end(JSON.stringify({message: randomMessage(messages)}));
// 	}
// 	if(req.method === 'OPTIONS') {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end();
// 	}
// }

app.use(serveStatic(__dirname)).listen(port);
   console.log("hmCaptures Server running on: " + port);
