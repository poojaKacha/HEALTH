var express = require('express');
var router = express.Router();
var notificationC = require('../controller/notification')

/* GET home page. */
router.post('/create',notificationC.create)
router.get('/',notificationC.get)

module.exports = router;
