const mogoose = require('mongoose')

const Schema = mogoose.Schema
//商店模型

const storeSchema = new Schema({
    id:{
        type:String
    },
    status:{
        type:Number
    },
    name:{
        type:String
    },
    owner:{
        //电话号码作为店铺标识
        type:String
    },
    pwd:{
        type:String
    },
    shops:{
        type:Object
    },
    orders:{
        type:Object
    }
})

const storeModel = mogoose.model('stores',storeSchema)

module.exports = storeModel