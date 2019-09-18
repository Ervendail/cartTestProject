var express = require('express');
var router = express.Router();
var utils = require('../utils');

/* GET home page. */
router.get('/home', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('home'));
});
module.exports = router;
