import vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import test from './modules/test'
import store from './modules/store'
import user from './modules/user'
vue.use(vuex)

export default new vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        test,
        store,
        user
    }
})