const mogoose = require('mongoose')

const Schema = mogoose.Schema

const storeSchema = new Schema({
    name:{
        type:String
    },
    owner:{
        //电话号码作为店铺标识
        type:String
    },
    shops:{
        type:Array
    }
})

const storeModel = mogoose.model('stores',storeSchema)

module.exports = storeModel