// console.log("Hello Node");

//  var os = require("os");
//  var message = "The platform is ";

//  function main(){
//      console.log(message +os.platform());
//  }

//  main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

var express = require("express");
var app = express();

app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
res.redirect('http://google.com');
});

// app.get("/google/:google.com", function(req, res){
//    var google = req.params.google.com;
//    res.send("<h1>Hello " + google.com +"</h1>");
// });

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

 
