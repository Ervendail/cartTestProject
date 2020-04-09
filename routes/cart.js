var utils = require('../utils');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.sendFile(utils.getHtmlViewPath('cart'));
});

module.exports = router;


