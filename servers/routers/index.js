const express = require('express')
const router = express.Router()
const fs = require('fs')

const {createSVG,searchStores,searchUsers} =require('../utils/index')
const test = require('./test')
const user = require('./user')
const store = require('./store')


var multiparty = require('multiparty'); var images = require("images");

const {goods,ratings,info} = require('../data/data.json')
const adminModel = require('../model/adminModel')
const userModel = require('../model/userModel')
const storeModel = require('../model/storeModel')


test(router)
user(router)
store(router)


//封禁/解封账号（修改账号状态）
router.post('/changUserStatus',(req,res) => {
    const {id,status} = req.body 
    if((id.indexOf('user')+1)){
        //改变普通用户
        userModel.updateOne({id},{$set:{status}},(error,result) =>{
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:{}})
            }
        })
    }else{
        //改变商家用户
        storeModel.updateOne({id},{$set:{status}},(error,result) =>{
            if(error){
                res.send({code:1,error})
            }else{
                res.send({code:0,data:{}})
            }
        })
    }
})

//管理员登录
router.post('/adminLogin',(req,res)=>{
    const {id,pwd} = req.body
    adminModel.findOne({id,pwd} , (error,result) => {
        if(error){
            res.send({code:1,error})
        }else{
            if(result){
                res.send({code:0,data:{}})
            }else{
                res.send({code:1,error:'账号或密码错误'})
            }
        }
    })
})

//搜索两种用户（管理员）
router.post('/searchUsers',(req,res)=>{
    const {keyWords,type} = req.body
    if(type === 'user'){
       searchUsers(keyWords,userModel,res)
    }else{
        searchStores(keyWords,storeModel,res)
    }
})

//保存图片
router.post('/img',(req,res)=>{
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        let oldfileName = files.file[0].originalFilename 

        let date = new Date()
        let newfileName = `img${date.valueOf()}.${oldfileName.split('.')[1]}`
        let rg = /(\.png|\.jpg)$/i
        if(rg.test(oldfileName)){
            images(files.file[0].path)
            //加载图像文件
            .size(1920)
            .save('public/'+newfileName , { 
                quality: 80 //保存图片到文件,图片质量为50
            });
 
            res.send({code:0,data:{oldfileName,newfileName}})
        }
        else {
            res.send({code:1,error:'文件格式错误'})
        }

    });
})
//商家列表


//一次性图形验证码
router.get('/captcha',(req,res)=>{
    let Svg = createSVG()
    let captcha = Svg.text.toLowerCase()
    console.log("/captcha",captcha)
    // console.log("id"+req.session.id)
    req.session.captcha=captcha
    // console.log(req.session)
    res.type('svg')
    res.header('Access-Control-Allow-Credentials',true)
    res.send(Svg.data)
})



module.exports = router