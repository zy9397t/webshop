import {userLogin,userRegist} from 'api'
import {USERLOGIN, USERREGIST,USERCHOOSE,UPDATASHOPCAR} from '../mutation_types'


import router from'@/router'

const state = {
    userInfo:'',
    userChoose:'',
    shopCar:[]
}
const actions = {
    async [USERREGIST]({commit},user){
        // console.log(user)
        // console.log(element)
        // console.log(router)
        const result = await userRegist(user)
        if(!result.code){
            // this.$message.success('注册成功，3秒后跳转至登录页面')
            window.alert('注册成功3秒后跳转至登录页面,点击确定立即跳转')
            setTimeout(() => {
                router.replace('/Login')
            }, 1500);

        }else{
            console.log(result.error)
        }
    },

    async [USERLOGIN]({commit},user){
        const result = await userLogin(user)
        if(!result.code){
            // console.log('UserLOGINcommit')
            commit(USERLOGIN,result.data)
            router.replace('/')
        }
    }
}
const mutations={
    [USERLOGIN](state,user){
        state.userInfo = user
    },
    [USERCHOOSE](state,shop){
        state.userChoose = shop
    },
    [UPDATASHOPCAR](state,shop){
        state.shopCar.push(shop)
    }
}
const getters={}

export default{
    state,
    actions,
    mutations,
    getters
}