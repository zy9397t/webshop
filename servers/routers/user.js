const userModel = require('../model/userModel')
const storeModel = require('../model/storeModel')
const {createToken} = require('../utils')
const {round,random} = require('mathjs')
const jwt = require('jsonwebtoken')
const e = require('express')
module.exports = function(router) {

    router.post('/beVip',(req,res) => {
        const id = req.body.id 
        userModel.updateOne({id},{$set:{vip:true}},(error,result) =>{
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:{}})
            }
        })
    })

    router.post('/getUserOrders',(req,res)=>{
        const {userid} = req.body
        userModel.findOne({id:userid},(error,result) => {
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:{Orders:JSON.stringify(result.orders)}})
            }
        }) 
    })

    router.post('/apply',(req,res)=>{
        const orderInfo = JSON.parse(req.body.order)
        // console.log(orderInfo)
        let storeID = orderInfo.shops[0].storeID


        storeModel.updateOne({id:storeID},{$addToSet:{orders:orderInfo}},(error,result) => {
            if(error){
                res.send({code:1,error})
            }else{
                console.log('添加订单成功')
            }
        })
        userModel.updateOne({id:orderInfo.userID},{$addToSet:{orders:orderInfo}},(error,result)=>{
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:'添加成功'})
            }
        })
    })


    router.post('/login_pwd',function(req,res){
        res.header('Access-Control-Allow-Credentials',true)
        // const {phone,pwd,captcha} = req.body
        const {phone,pwd} = req.body
        // console.log(phone,pwd)
        // console.log(req.session.captcha)
        // console.log("id"+req.session.id)
        // if(req.session.captcha !== captcha.toLowerCase()){
        //     res.send({code:1,data:{errorMessage:'验证码错误'}})
        //     req.session.captcha = ''
        //     return
        // }
        // req.session.captcha = ''
        // res.send({code:0})
        userModel.findOne({phone},(error,user)=>{
            if(error || !user){
                res.send({code:1,error:'账号或密码错误'})
            }else{
                if(pwd !== user.pwd){
                    res.send({code:1,error:'账号或密码错误'})
                }
                else if(user.status){
                    res.send({code:1,error:'该帐号已封禁！'})
                }
                else{
                    req.session.destroy()
                    res.send({code:0,data:{
                        userid:user.id,
                        username:user.name,
                        userVip:user.vip,
                        userphone:user.phone,
                        userothers:user.others,
                        // userorders:JSON.stringify(user.orders)
                    }
                })
                }
            }
        })
    }),

    router.post('/addOrder',(req,res)=>{
        const {userId,storeID,order} = req.body
        console.log(userId,storeID,order)
            // userModel.updateOne({id:userId})
        
    })
    
    router.post('/registUser',(req,res)=>{
        const {name,phone,pwd,others,status} = req.body
        // console.log(name,phone,pwd,others)
        userModel.findOne({phone},(err,user)=>{
            if(!err){
                console.log(user)
                if(!!!user){
                    let user = {
                        id:'user'+round(random(0,15)*10000),
                        name,
                        phone,
                        pwd,
                        status,
                        vip:false,
                        others:{},
                        orders:{}
                    }
                    userModel.create(user)
                    .then(result=>{
                        console.log("创建成功",result)
                        res.send({code:0,date:{}})
                    })
                    .catch(error => {
                        console.log("失败",error)
                        res.send({code:1,error:error})
                    })
                }else{
                    res.send({code:1,error:'账户已存在'})
                }
            }else{
                res.send({code:1,error:err})
            }
        })
    })

    router.post('/autoLogin',(req,res) =>{
        // console.log(req.headers['authorization'])
        // console.log(req.body.token)
        // console.log(jwt.decode(token,'zy123'))
        
        if(req.body.token){
            const decode = jwt.decode(req.body.token,'zy123')
            if(!decode || decode.exp < Date.now() / 1000) {
                res.send({code:1,data:{errorMessage:'token过期,请重新登录'}})
            }else{
                userModel.findOne({_id:decode.id},(error,user)=>{
                    if(error || !user){
                        res.send({code:1,data:{errorMessage:'重新登录'}})
                    }else{
                        res.send({code:0,data:{
                            user:{user_id:user.id,name:user.name,phone:user.phone},
                        }})
                    }
                })
            }
        }else{
            res.send({code:1,data:{errorMessage:'无token,请重新登录'}})
        }
        // res.send(1)
    })

   
}