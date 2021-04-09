import {REGISTSTORE,GETMYSTORE} from '../mutation_types'
import {registStore,getMyStore} from 'api'
export default {
    state:{
        registStoreResult:'',
        myStore:''
    },
    actions:{
        async [REGISTSTORE]({commit},store){
            // console.log(store)
            const result = await registStore(store)
            // console.log(result)
            commit(REGISTSTORE,result)
        },

        async [GETMYSTORE]({commit},data){
            const result = await getMyStore(data)
            console.log(result)
            if(!result.code){
                commit(GETMYSTORE,result.data)
            }else(
                commit(GETMYSTORE,{})
            )
        }
    },
    mutations:{
        [REGISTSTORE](state,registStoreResult){
            state.registStoreResult = registStoreResult
        },
        [GETMYSTORE](state,store){
            state.myStore = store
        }
    },
    getters:{}
}