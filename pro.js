var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('prj'));

var server = app.listen(5000, function () {
    console.log('listening at http://localhost:5000');
});
