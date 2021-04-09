module.exports = function(Router){
    Router.get('/test',(req,res)=>{
        res.send('Ok,/test_get')
    })
}