const userModel = require('../model/userModel')
const storeModel = require('../model/storeModel')
const {createToken} = require('../utils')
const {round,random} = require('mathjs')
const jwt = require('jsonwebtoken')
module.exports = function(router) {
    router.post('/login_pwd',function(req,res){
        res.header('Access-Control-Allow-Credentials',true)
        // const {phone,pwd,captcha} = req.body
        const {phone,pwd} = req.body
        console.log(phone,pwd)
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
                // res.send({code:1,data:{errorMessage:'账号或密码错误'}})
                res.send({code:1,error:'账号或密码错误'})
            }else{
                if(pwd !== user.pwd){
                    // res.send({code:1,data:{errorMessage:'账号或密码错误'}})
                    res.send({code:1,error:'账号或密码错误'})
                }else{
                    req.session.destroy()
                    res.send({code:0,data:{
                        // user:{user_id:user.id,name:user.name,phone:user.phone},
                        // token:createToken(user.id)
                        userid:user.id,
                        username:user.name,
                        userVip:user.vip,
                        userphone:user.phone,
                        userothers:user.others,
                        userorders:user.orders
                    }
                })
                }
            }
        })
    }),

    
    router.post('/registUser',(req,res)=>{
        const {name,phone,pwd,others} = req.body
        console.log(name,phone,pwd,others)
        userModel.findOne({phone},(err,user)=>{
            if(!err){
                console.log(user)
                if(!!!user){
                    let user = {
                        id:'user'+round(random(0,15)*10000),
                        name,
                        phone,
                        pwd,
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