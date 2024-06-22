var express = require('express');
var router = express.Router();
var REPORTS = require('../model/reports')
var reportsC = require('../controller/reports')

/* GET home page. */
router.post('/addREPORTS',reportsC.addDATA)

router.get('/',reportsC.getDATA)

module.exports = router;
