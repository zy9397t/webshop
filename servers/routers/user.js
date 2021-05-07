const userModel = require('../model/userModel')
const storeModel = require('../model/storeModel')
const {createToken} = require('../utils')
const {round,random} = require('mathjs')
const jwt = require('jsonwebtoken')
const e = require('express')
module.exports = function(router) {

    //普通用户成为vip
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

    //获取当前用户的所有订单信息
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

    //购物车结算
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

    //用户登录
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
    
    //用户注册
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

  
   
}