 const svgCaptcha= require('svg-captcha')
 const jwt = require('jsonwebtoken')
 module.exports = {
    createSVG:function() {
         return svgCaptcha.create({
             size:4,
             color:true,
             noise:2
         })
     },
    
     createToken:function(id){
         const token = jwt.sign({id},'zy123',{expiresIn:'7 days'})
        //  const token = jwt.sign({id},'zy123',{expiresIn:'10 s'})
         return token
     },

     

    searchUsers(keyWords,userModel,res){
        let rg = /^\d+$/
        if(rg.test(keyWords)){
            userModel.find({},(error,usersArr)=>{
                if(error){
                    res.send({code:1,error})
                }else{
                   let users = usersArr.filter(user => {
                        return user.phone.indexOf(keyWords)+1 || user.name.indexOf(keyWords) + 1
                    })
                    res.send({code:0,data:{users}})
                }
            })
        }else{
            userModel.find({},(error,usersArr)=>{
                if(error){
                    res.send({code:1,error})
                }else{
                   let users = usersArr.filter(user => {
                        return user.name.indexOf(keyWords) + 1
                    })
                    res.send({code:0,data:{users}})
                }
            })
        }
    },

    searchStores(keyWords,storeModel,res){
        let rg = /^\d+$/
        if(rg.test(keyWords)){
            storeModel.find({},(error,storesInfo)=>{
                if(error){
                    res.send({code:1,error})
                }else{
                   let stores = storesInfo.filter(user => {
                        return user.owner.indexOf(keyWords)+1 || user.name.indexOf(keyWords) + 1
                    })
                    res.send({code:0,data:{stores}})
                }
            })
        }else{
            storeModel.find({},(error,storesInfo)=>{
                if(error){
                    res.send({code:1,error})
                }else{
                   let stores = storesInfo.filter(user => {
                        return user.name.indexOf(keyWords) + 1 
                    })
                    res.send({code:0,data:{stores}})
                }
            })
        }
    }
 }