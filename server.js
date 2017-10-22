var express = require('express');
var app = express();

// server settings
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', { title: 'It\'s lit!', message: 'Welcome aboard. Time to hack some node.js 😎' })
})

// routers
app.use('/accounts', require('./routers/account'));

var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Server running in port ' + listener.address().port);
});

module.exports = app;