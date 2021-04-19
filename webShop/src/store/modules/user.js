import {userLogin,userRegist} from 'api'
import {USERLOGIN, USERREGIST} from '../mutation_types'


import router from'@/router'

const state = {}
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
            console.log(result)
        }
    }
}
const mutations={

}
const getters={}

export default{
    state,
    actions,
    mutations,
    getters
}