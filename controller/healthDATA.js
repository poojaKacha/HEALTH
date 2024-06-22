var HEALTH = require('../model/health')

exports.addDATA = async function(req, res, next) {
    try {
      let create = await HEALTH.create(req.body)
      res.status(201).json({
        status: "success..!!",
        message: "add data successfull",
        create
      })
    } catch (error) {
      res.status(404).json({
        status: "FAIL",
        message:error.message
      })
    }
    
};
exports.viewDATA = async function(req, res, next) {
        try {
          let find = await HEALTH.find().populate('userID')
          res.status(201).json({
            status: "success..!!",
            message: "find data successfull",
            find
          })
        } catch (error) {
          res.status(404).json({
            status: "FAIL",
            message:error.message
          })
        }
        
};
exports.updateDATA = async function(req, res, next) {
    try {
      let update = await HEALTH.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({
        status: "success..!!",
        message: "update data successfull",
        update
      })
    } catch (error) {
      res.status(404).json({
        status: "FAIL",
        message:error.message
      })
    }
    
};
exports.delID = async function(req, res, next) {
  try {
      let deleteID = await HEALTH.findByIdAndDelete(req.params.id)
      res.status(201).json({
          status: "Success..!!",
          message: "delete sucessfully",
          deleteID
      })
  } catch (error) {
      res.status(404).json({
          status: "FAIL",
          message:error.message
      })
  }    
};
 
      