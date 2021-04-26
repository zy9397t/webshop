const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const session = require('express-session')

// const userModel = require('./model/userModel')
// const idModel = require('./model/idModel')
const routers = require('./routers');
const adminModel = require('./model/adminModel')

const app = express()
app.use('/public',express.static('public'))
app.use(cors({
    origin:'http://localhost:8080'
}))
// app.use(express.static('./public'))
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
                console.log('服务器在4000端口启动成功')
            }
        })
    })
    .catch(error => {
        console.log('数据库连接失败',error)
    })


