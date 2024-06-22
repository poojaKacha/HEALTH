var NOTIFICATION = require('../model/notification')

exports.create = async function(req, res, next) {
    try {
        
        let create = await NOTIFICATION.create(req.body)
        res.status(201).json({
            status: "success..!!",
            message: "notification",
            create
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
        })
    }
};
exports.get = async function(req, res, next) {
    try {
        let create = await NOTIFICATION.find().populate('userID')
        res.status(201).json({
            status: "success..!!",
            message: " get a notification",
            create
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
        })
    }
};