import {userLogin,userRegist,apply,getUserOrders,beVip} from 'api'
import {USERLOGIN, USERREGIST,USERCHOOSE,UPDATASHOPCAR,DELSHOPCAR,APPLY,CLEARSHOPCAR,CREATEORDER,GETUSERORDERS, BEVIP} from '../mutation_types'


import router from'@/router'
import vue from '../../main'
import { Math } from 'core-js'



const state = {
    userInfo:'',
    userChoose:'',
    shopCar:{},
    orders:[],
    shopCarShopsId:[],
    allPrice:0
}
const actions = {

    async [BEVIP]({commit},userid){
        const result = await beVip({id:userid})
        if(!result.code){
            vue.$message.success('恭喜你！成为尊贵的vip用户')
            commit(BEVIP)
        }
    },

    async [USERREGIST]({commit},user){
        const result = await userRegist(user)
        if(!result.code){
            // window.alert('注册成功3秒后跳转至登录页面,点击确定立即跳转')
            vue.$message.success('注册成功3秒后跳转至登录页面,点击确定立即跳转')
            setTimeout(() => {
                router.replace('/Login')
            }, 1500);

        }else{
            // console.log(result.error)
        }
    },

    async [USERLOGIN]({commit},user){
        const result = await userLogin(user)
        if(!result.code){
            // console.log('UserLOGINcommit')
            commit(USERLOGIN,result.data)
            router.replace('/')
        }
    },

    async [APPLY]({commit,state},userAddress){
        //0 待处理 1 已处理
        let keys = Object.keys(state.shopCar)
        for(let i =0 ; i<keys.length;i++){
            let shops = state.shopCar[keys[i]] 
            let order = {}
            order.status = 0
            order.id = 'order'+ Math.round(Math.random() * 10000)
            // order.details = state.shopCar
            order.shops = shops
            order.userID = state.userInfo.userid
            
            //地址信息
            order.address = userAddress

            let result = await apply({order:JSON.stringify(order)})
            if(!result.code){
                commit(CREATEORDER,order)
            }
        }

        commit(CLEARSHOPCAR)
        router.replace('/Orders')
    },
    async [GETUSERORDERS]({commit},userid){
        const result = await getUserOrders({userid})
        if(!result.code){
            const orders = JSON.parse(result.data.Orders)
            orders.reverse()
            commit(GETUSERORDERS,orders)
        }
    }
}
const mutations={
    [BEVIP](state){
        state.userInfo.userVip = true
    },
    [USERLOGIN](state,user){
        state.userInfo = user
    },
    [USERCHOOSE](state,shop){
        state.userChoose = shop
    },
    [UPDATASHOPCAR](state,shop){
        state.shopCarShopsId.push(shop.imgurel)

        state.allPrice += shop.shopCount * shop.newshopprice
        if(shop.storeID){
            if(!state.shopCar.hasOwnProperty(shop.storeID)){
                vue.$set(state.shopCar,shop.storeID,[])
            }
            state.shopCar[shop.storeID].push(shop) 
        }
    },
    [DELSHOPCAR](state,info){
        let shops = state.shopCar[info.key]
        let imgIndex = state.shopCarShopsId.indexOf(shops[info.index].imgurel)
        state.shopCarShopsId.splice(imgIndex,1)
        
        let delshop = state.shopCar[info.key].splice(info.index,1)
        state.allPrice -= delshop[0].shopCount*delshop[0].newshopprice
        if(!state.shopCar[info.key].length){
            delete state.shopCar[info.key]
        }
    },
    [CLEARSHOPCAR](state){
        state.shopCarShopsId = []
        state.shopCar = {}
        state.allPrice = 0
    },
    [CREATEORDER](state,order){
        state.orders.unshift(order)
    },
    [GETUSERORDERS](state,orders){
        state.orders = orders
        console.log(state.orders)
    }
}
const getters={
    // shopCarShopsId(state){
    //     let arr = []
    //     // state.shopCar.forEach((shop) => {
    //     //     arr.push(shop.imgurel)
    //     // })
    //     Object.keys(state.shopCar).forEach(storeID => {
    //         for (let index = 0; index < state.shopCar[storeID].length; index++) {
                
    //     })
    //     return arr
    // }


}

export default{
    state,
    actions,
    mutations,
    getters
}