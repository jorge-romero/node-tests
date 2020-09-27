var express = require('express');
var app = express();

app.get('/', function (req, res) {
      body = "Hello world! \nvariable:MY_VARIABLE: " + process.env.MY_VARIABLE  + "\nMY_SECRET: " + process.env.MY_SECRET
	  res.send(body);
});

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
});

