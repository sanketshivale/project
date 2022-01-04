const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  var cityName = req.body.city;
  var apisyntax1 = "https://api.openweathermap.org/data/2.5/weather?q=";
  var apisyntax2 = "&appid=9e29038f70e7c26f9fa2df2563fa3f8d&units=metric";
  var apiforfetchingdetails = apisyntax1 + cityName + apisyntax2;
  https.get(apiforfetchingdetails, function(response) {
    console.log(response);
    response.on("data", function(data) {
      const wheatherdata = JSON.parse(data);
      const temperature = wheatherdata.main.temp;
      const description = wheatherdata.weather[0].description;
      res.send("The weather of the city " + cityName + " is " + temperature + " And The Description of wheather is " + description);
    });
  });
});
// api.openweathermap.org/data/2.5/weather?q=London&appid={9e29038f70e7c26f9fa2df2563fa3f8d}
app.listen(2111, function() {
  console.log("The Server has started on the port 2111 to acess it folloe the link http://localhost:2111")
});
