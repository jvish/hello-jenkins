var express = require('express');

var app = express();

var value = 10;

app.get('/', function (req, res) {
	res.send('Jenkins Tutorial');
});

app.listen(process.env.PORT || 5000);

module.exports = app;