const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportsSchema = new Schema({
    healthID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'health'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
    },
    file_date: {
        type: String,
        required:true
    },
    expire_date: {
        type: String,
        required:true
    }
})
const REPORTS = mongoose.model('reports', reportsSchema)
module.exports = REPORTS