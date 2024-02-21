var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin:<password>@cluster0.cqoxlxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";