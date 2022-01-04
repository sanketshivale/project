const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req ,res){
  var firtName= req.body.firstName;
  var lastName= req.body.lastName;
  var emailAddress= req.body.emailAddress;

  console.log("Heyy " + firtName + lastName + " thanks to enter your detail with email address" + emailAddress);
  res.send("Heyy " + firtName + lastName + " thanks to enter your detail with email address" + emailAddress);

});

app.listen(2000, function(){
  console.log("Port is connected to the 2000 use link to access http://localhost:2000")
});
