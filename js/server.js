var express = require('express');
var amazonAPI = require(__dirname + '/index');
var app = express();


app.listen(process.env.PORT || 2999, function() {
  console.log('listening on port 2999');
});


