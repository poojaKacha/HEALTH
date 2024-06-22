const mongoose = require('mongoose')
const Schema = mongoose.Schema

const healthSchema = new Schema({
    age: {
        type: String,
        required:true
    },
    problem: {
        type: String,
        required:true
    },
    weight: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users'
    }
})
const HEALTH = mongoose.model('health', healthSchema)
module.exports = HEALTH