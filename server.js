var express = require('express');
var path = require('path');
var app = express();

// server settings
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'It\'s lit!',
    message: 'Welcome aboard. Time to hack some node.js 😎' })
})

// routers
app.use('/accounts', require('./routers/account'));

var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Server running in port ' + listener.address().port);
});

module.exports = app;