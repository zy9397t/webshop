import {LOGOUT,GETSTORES} from './mutation_types'
import router from '../router'
export default {
    [LOGOUT](state){
        if(state.user.userInfo){
            state.user.userInfo = ''
        }else if(state.store.myStore){
            state.store.myStore = ''
            router.replace('/Login')
        }else{
            return
        }
    },

    [GETSTORES](state,stores){
        
        // console.log(stores)
        stores.forEach(store => {
            if(store.shops){
                store.shops = JSON.parse(store.shops)
            }
        });
        state.stores = stores
        // console.log(state)
    }
}