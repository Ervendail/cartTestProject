var utils = require('../utils');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('cart/shipping'));
});
router.get('/shipping', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('cart/shipping'));
});
router.get('/billing', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('cart/billing'));
});
router.get('/payment', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('cart/payment'));
});
router.get('/success', function(req, res, next) {
	res.sendFile(utils.getHtmlPath('cart/success'));
});
module.exports = router;
