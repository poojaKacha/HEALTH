var express = require('express');
var router = express.Router();
var healthC = require('../controller/healthDATA')
var HEALTH = require('../model/health')



/* GET home page. */
router.post('/addDATA',healthC.addDATA)
router.get('/viewDATA',healthC.viewDATA)
router.patch('/:id', healthC.updateDATA)
router.delete('/:id',healthC.delID)

  

module.exports = router; 
