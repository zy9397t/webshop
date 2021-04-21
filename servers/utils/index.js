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

       JsonFilter:function(jsonstr) {
    //     jsonstr = jsonstr.replace("\\r\\n", "\\n");
    // //    jsonstr=jsonstr.replace("\\r\\n\\r\\n", "\\n");
        const rz = /['\\r','\\n']/
        jsonstr.replace(rz,'\\n')
        return jsonstr;
    }
 }