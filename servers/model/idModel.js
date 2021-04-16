const mogoose = require('mongoose')

const Schema = mogoose.Schema
//商店模型

const idSchema = new Schema({
    store_id:{
        type:Number
    },
    user_id:{
        type:Number
    },
   
})

const idModel = mogoose.model('ids',idSchema)

module.exports = idModel