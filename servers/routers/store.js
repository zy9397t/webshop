const storeModel = require('../model/storeModel')
const userModel = require('../model/userModel')
const {JsonFilter} =  require('../utils') 
const {
    round,
    random
} = require('mathjs')
const user = require('./user')
module.exports = function (router) {

    //订单发货（修改订单状态）
    router.post('/changeOrderStatus',(req,res) => {
        const { userId,storeId,orderId } = req.body
        // console.log(userId,storeId,orderId)
        storeModel.updateOne({id:storeId,"orders.id":orderId},{$set:{'orders.$.status':1}},(error,result) => {
            if(error){
                res.send({code:1,error})
            }
        })

        userModel.updateOne({id:userId,"orders.id":orderId},{$set:{'orders.$.status':1}},(error,result) => {
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:{}})
            }
        })
    })

    //获取当前商店的所有订单
    router.post('/getStoreOrders',(req,res) => {
        const { storeid } = req.body
        // console.log(storeid)
        storeModel.findOne({id:storeid},(error,result) => {
            if(error){
                res.send({code:1,error})
            }else{
                // console.log(result)
                res.send({code:0,data:{orders:result.orders}})
            }
        })
    })

    //获取所有店铺信息（首页）
    router.get('/getStores', (req, res) => {
        storeModel.find({}, (error, Stores) => {
            // console.log(error, Stores)
            if(!error){
                
                res.send({
                    code: 0,
                    data: Stores.map((store)=>{
                        let obj = {
                            id:store.id,
                            name:store.name,
                            phone:store.owner,
                            shops:JSON.stringify(store.shops)
                        }
                        return obj
                    })
                })
               }else{
                   res.send({code:0,error})
               }
        })
       
    })

    //当前店铺修改商品列表
    router.post('/addShop', (req, res) => {
        let {
            id,
            shops
        } = req.body
        shops = JSON.parse(shops)
        storeModel.findOne({
            id
        }, (error, store) => {
            // console.log(error, store)
            if(!error && store){
                
                storeModel.updateOne({id},{$set:{shops:shops}},(error,result)=>{
                    if(!error){
                        // console.log(result)
                        res.send({code:0,data:''})
                        
                    }else{
                        res.send({code:1,error})
                    }
                })
            }else{
                res.send({code:1,error})
            }
        })
    })

    //商家用户登录
    router.post('/loginStore', (req, res) => {
        const phoneNum = req.body.phone
        const pwd = req.body.pwd
        if (!pwd || !phoneNum) {
            res.send({
                code: 1,
                error: '格式错误'
            })
        }
        // console.log(phoneNum)
        storeModel.findOne({
            owner: phoneNum
        }, (error, store) => {
            // console.log(store)
            if (!error && store && (store.pwd === pwd)) {
                // console.log(store.shops),
                 if(store.status){
                    res.send({code:1,error:'该帐号已封禁！'})
                }else{
                    res.send({
                        code: 0,
                        data: {
                            id:store.id,
                            name: store.name,
                            shops: JSON.stringify(store.shops ),
                            // orders:JSON.stringify(store.orders)
                        }
                    })
                }
                
            } 
            else {
                res.send({
                    code: 1,
                    error: "没有店铺"
                })
            }
        })
    })

    //商家用户注册
    router.post('/registStore', (req, res) => {
        const storeName = req.body.name
        const phoneNum = req.body.phone
        const pwd = req.body.pwd
        const status = req.body.status
        if (!storeName || !phoneNum || !pwd) {
            // console.log("为空")
            res.send({
                code: 1,
                error: "命名不符合规范"
            })
            return
        }
        storeModel.find({
            owner: phoneNum
        }, (error, store) => {
            if (!error && !store.length) {
                let store = {
                    id: 'store' + round(random(0, 15) * 10000),
                    pwd: pwd,
                    name: storeName,
                    owner: phoneNum,
                    status,
                    shops: [],
                }
                storeModel.create(store)
                    .then(result => {
                        console.log("创建成功", result)
                        res.send({
                            code: 0,
                            date: {}
                        })
                    })
                    .catch(error => {
                        console.log("失败", error)
                        res.send({
                            code: 1,
                            error: error
                        })
                    })
            } else {
                if (error) {
                    res.send({
                        code: 1,
                        error
                    })
                } else {
                    res.send({
                        code: 1,
                        error: "你已经有店铺了哦！"
                    })
                }
            }
        })


    })


}