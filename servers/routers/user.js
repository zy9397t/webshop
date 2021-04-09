const userModel = require('../model/userModel')
const storeModel = require('../model/storeModel')
const {createToken} = require('../utils')
const jwt = require('jsonwebtoken')
module.exports = function(router) {
    router.post('/login_pwd',function(req,res){
        res.header('Access-Control-Allow-Credentials',true)
        const {name,pwd,captcha} = req.body
        console.log(name,pwd,captcha)
        console.log(req.session.captcha)
        // console.log("id"+req.session.id)
        if(req.session.captcha !== captcha.toLowerCase()){
            res.send({code:1,data:{errorMessage:'验证码错误'}})
            req.session.captcha = ''
            return
        }
        req.session.captcha = ''
        // res.send({code:0})
        userModel.findOne({name},(error,user)=>{
            if(error || !user){
                res.send({code:1,data:{errorMessage:'账号或密码错误'}})
            }else{
                if(pwd !== user.pwd){
                    res.send({code:1,data:{errorMessage:'账号或密码错误'}})
                }else{
                    req.session.destroy()
                    res.send({code:0,data:{
                        user:{user_id:user.id,name:user.name,phone:user.phone},
                        token:createToken(user.id)
                    }})
                }
            }
        })
    }),

    router.post('/getMyStore',(req,res)=>{
        const phoneNum = req.body.phoneNum
        // console.log(phoneNum)
        storeModel.findOne({owner:phoneNum},(error,store)=>{
            // console.log(store)
            if(!error && store){
                res.send({code:0,data:{
                    name:store.name,
                    shops:store.shops
                }})
            }else{
                res.send({code:1,error:"没有店铺"})
            }
        })
        // res.send({code:0})
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