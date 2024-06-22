var USER = require('../model/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new Error('token invaild')
    }
    var decoded = jwt.verify(token, 'DEMO')

    let usercheck = await USER.findById(decoded.id)
    if (!usercheck) {
      throw new Error('user not found')
    }
    next()

    
    
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message:error.message
    })
  }
};
exports.Register = async function(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password,10)
      let Register = await USER.create(req.body)
      var token = jwt.sign({ id : Register._id }, 'DEMO');

      res.status(201).json({
        status: "success",
        messaage: "user  create successfully",
        Register,
        token
      })
      
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  exports.LogIn = async function(req, res, next) {
   try {
     let logIN = await USER.findOne({ email: req.body.email })
     if (!logIN) {
       throw new Error('user not found')
     }
     let passverify = await bcrypt.compare(req.body.password, logIN.password)
     if (!passverify) {
       throw new Error('password invaild')
     }
     var token = jwt.sign({ id : logIN._id }, 'DEMO');

     res.status(201).json({
       status: "success",
       message: "logIN succeessfully",
       logIN,
       token
     })
    
   } catch (error) {
     res.status(404).json({
       status: "Fail",
       messaage:error.messaage
    })
   }
};
  exports.update = async function(req, res, next) {
    try {
    
      let update = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true})
     
    
      res.status(200).json({
        status: "success",
        messaage: "user  update successfully",
        update
      })
      
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message:error.message
      })
    }
};
  