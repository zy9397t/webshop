import {test} from 'api'
export default{
    state:{
        id:2
    },
    actions:{
        async add({commit}){
            const r = await test()
            commit('add',r)
        }
    },
    mutations:{
        add(state,id){
            state.id = id
        }
    },
    getters:{}
}