const mongoose = require('mongoose')
const Schema = mongoose.Schema
const notification = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    title: {
        type: String,
        required:true
    },
    messge: {
        type: String,
        required:true
    }
})
const NOTIFICATION = mongoose.model('notification', notification)
module.exports = NOTIFICATION