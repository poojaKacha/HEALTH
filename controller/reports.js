var REPORTS = require('../model/reports')

exports.addDATA = async function(req, res, next) {
    try {
        let GENERATEreport = await REPORTS.create(req.body)
        res.status(201).json({
            status: "success..!!",
            message: "generate reports",
            GENERATEreport
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
        })
    }
};
exports.getDATA = async function(req, res, next) {
    try {
        let VIEWreport = await REPORTS.find().populate(['healthID','userID'])
        res.status(201).json({
            status: "success..!!",
            message: "view reports",
            VIEWreport
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message:error.message
        })
    }
};