var express = require("express");
var app = express();
var httpObj = require("http");
var http = httpObj.createServer(app);

var mainURL = "http://localhost:3000";

// var mongodb = require("mongodb");
// var mongoClient = mongodb.MongoClient;
// var ObjectId = mongodb.ObjectId;

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")

http.listen(3000, function(){
    console.log("server started at " + mainURL);

    // mongoClient.connect("mongodb://localhost:27017",  function(error, client) {

    //     database = client.db("file_transer");
    //     console.log("database_connected");
    // });

});
