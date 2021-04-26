const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    status:{
        type:Number
    },
    phone:{
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
    },
    orders:{
        type:Object
    }
})
const userModel = mongoose.model('users',userSchema)
module.exports = userModel