var express = require('express');
var router = express.Router();
var userC = require('../controller/user')

/* GET users listing. */
router.post('/Register',userC.Register)
router.post('/LogIn',userC.LogIn)
router.patch('/:id',userC.sequre, userC.update)

module.exports = router;
