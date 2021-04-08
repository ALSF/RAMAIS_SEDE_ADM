var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');

// viewed at http://172.16.0.11:4050
app.get('/', function(req, res) {
    res.sendfile('./src/ramais.html');
});

app.use('/', express.static(public));

app.listen(4050);
