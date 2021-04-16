const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    Email:{
        type:String
    },
    pwd:{
        type:String
    },
    vip:{
        type:Boolean
    },
    others:{
        type:Object
    }
})
const userModel = mongoose.model('users',userSchema)
module.exports = userModel