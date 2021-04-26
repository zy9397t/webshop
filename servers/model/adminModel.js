const mogoose = require('mongoose')

const Schema = mogoose.Schema
//商店模型

const admin = new Schema({
    id:{
        type:String
    },
    pwd:{
        type:String
    }
})

const adminModel = mogoose.model('admins',admin)

module.exports = adminModel