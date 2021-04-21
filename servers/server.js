const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const session = require('express-session')

// const userModel = require('./model/userModel')
// const idModel = require('./model/idModel')
const routers = require('./routers');


const app = express()
app.use('/public',express.static('public'))
app.use(cors({
    origin:'http://localhost:8080'
}))
app.use(express.static('./public'))
app.use(express.urlencoded({extended: true,limit:'50mb'}))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser('12345'))
app.use(session({
    secret: '12345',
    name:'session_key',
    resave: false,
    // rolling:true,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24},
}))
app.use('/',routers)


    // await mongoose.connect('mongodb://localhost/my_database', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
    // });
    // mongoose.connect("mongodb://zyt:wdnmd.2020@8.129.174.154:27017/gshop", {
    // mongoose.connect("mongodb://zyt:wdnmd.2020@localhost:27017/gshop", {
    mongoose.connect("mongodb://localhost:27017/gshop", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        authSource:'admin'})
    .then(()=>{
        console.log('数据库连接成功')
        app.listen(4000,(error)=>{
            if(error){
                console.log(error)
            }else{
                // userModel.create({
                //     name:'test',
                //     pwd:'zy123',
                //     phone:13996640244,
                //     Email:'306648702@qq.com'
                // })
                // .then(result => {
                //     console.log('数据插入成功',result)
                // })
                // .catch(error => {
                //     console.log('数据插入失败')
                // })

                console.log('服务器在4000端口启动成功')
            }
        })
    })
    .catch(error => {
        console.log('数据库连接失败',error)
    })


