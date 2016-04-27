var express = require('express');

var app = express();

var PORT = 4000;

app.use(express.static(__dirname+"/public"));

app.get("*",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
}).listen(PORT);