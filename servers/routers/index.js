const express = require('express')
const router = express.Router()
const fs = require('fs')

const {createSVG} =require('../utils/index')
const test = require('./test')
const user = require('./user')
const store = require('./store')


var multiparty = require('multiparty'); var images = require("images");

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



router.post('/img',(req,res)=>{
    // console.log('/imgpost')
    // console.log(req)
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        // console.log(files)
        // fs.writeFileSync('/public/test.png',fs.readFileSync(files.file[0].path))
        //   
        // console.log("public/" + files.file[0].originalFilename)
        let filename = "public/" + files.file[0].originalFilename 
        let rz = /(\.png|\.jpg)$/i
        if(rz.test(filename)){
            images(files.file[0].path) //Load image from file 
            //加载图像文件
            .size(1920) //Geometric scaling the image to 400 pixels width
            //等比缩放图像到400像素宽

            //在(10,10)处绘制Logo
            .save(filename , { //Save the image to a file,whih quality 50
                quality: 80 //保存图片到文件,图片质量为50
            });
 
            res.send({code:0,data:filename})
        }
        else {
            res.send({code:1,error:'文件格式错误'})
        }

    });
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