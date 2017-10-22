var router = require('express').Router();
var accountController = new require('./../controllers/account')();

router.get('/', accountController.get);

module.exports = router;