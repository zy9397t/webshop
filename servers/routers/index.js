const express = require('express')
const router = express.Router()

const {createSVG} =require('../utils/index')
const test = require('./test')
const user = require('./user')
const store = require('./store')
const {goods,ratings,info} = require('../data/data.json')
test(router)
user(router)
store(router)
//商品分类
router.get('/index_category',function(req,res){
    const data = require('../data/index_category.json')
    setTimeout(()=>{
        res.send({code:0,data})
    },1000)
})



//商家列表
router.get('/shops',(req,res)=>{
    const data = require('../data/shops.json')
    setTimeout(()=>{
        res.send({code:0,data})
    },1000)
})

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

router.get('/goods',(req,res)=>{
    res.send({code:0,data:{goods}})
})
router.get('/info',(req,res)=>{
    res.send({code:0,data:{info}})
})
router.get('/ratings',(req,res)=>{
    res.send({code:0,data:{ratings}})
})

module.exports = router