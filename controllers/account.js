var accountController = function(args) {
  var _get = function(req, res) {
    return res.render('index', { title: 'Personal Account', message: 'this route should be protected' });
  };

  return {
    get: _get
  };
};

module.exports = accountController;