var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/liveness', function(req, res) {
        res.send('Alive');
});


app.get('/api/readiness', function(req, res) {
        res.send('Ready');
});


app.get('/', function (req, res) {
      body = "Hello world! \nvariable:MY_VARIABLE: " + process.env.MY_VARIABLE  + "\nMY_SECRET: " + process.env.MY_SECRET
	  res.send(body);
});

app.listen(PORT, function () {
	  console.log('Example app listening on port '+PORT+'!');
});

