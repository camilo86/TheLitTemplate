var express = require('express');
var app = express();

app.get('/', function(req, res) {
  return res.json({
    message: 'Hello World!'
  });
})

var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Server running in port ' + listener.address().port);
});

module.exports = app;