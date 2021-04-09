const storeModel = require('../model/storeModel')
const userModel = require('../model/userModel')
module.exports = function(router){

    router.get('/getStores',(req,res)=>{
        storeModel.find({},(error,Stores)=>{
            console.log(error,Stores)
        })
        res.send({code:0,date:Stores})
    })

    router.post('/addShops',(req,res)=>{
        const {phoneNum} = req.body
        // storeModel.findOneAndUpdate({owner:phoneNum},{},)
        storeModel.findOne({owner:phoneNum},(error,store)=>{
            console.log(error,store)
        })
        res.send({code:0})
    })

    router.post('/registStore',(req,res)=>{
        // req.body.storeName
        // const {storeName,phoneNum} = req.body
        const storeName = req.body.name
        const phoneNum = req.body.owner
        // console.log(req.body)
        // console.log(storeName,phoneNum)
        if(!storeName || !phoneNum){
            // console.log("为空")
            res.send({code:1,error:"命名不符合规范"})
            return
        }
        storeModel.find({owner:phoneNum},(error,store)=>{
            // console.log(1)
            // console.log(error,store)
            if(!error && !store.length){
                let store = {
                    name:storeName,
                    owner:phoneNum,
                    shops:[],
                }
                storeModel.create(store)
                .then(result=>{
                    console.log("创建成功",result)
                    res.send({code:0,date:{}})
                })
                .catch(error => {
                    console.log("失败",error)
                    res.send({code:1,error:error})
                })
            }else{
                if(error){
                    res.send({code:1,error})
                }else{
                    res.send({code:1,error:"你已经有店铺了哦！"})
                }
            }
        })
        

    })

    
}