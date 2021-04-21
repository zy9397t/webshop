import {REGISTSTORE,STORELOGIN,ADDSHOP,UPDATASHOPS,DELSHOPS} from '../mutation_types'
import {registStore,storeLogin,addShop} from 'api'
import router from '@/router'
import {JsonFilter} from 'utils'
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
            if(!result.code){
                window.alert('注册成功！将跳转至登录页面')
                router.replace('/Login')
            }
        },

        // async [GETMYSTORE]({commit},data){
        //     const result = await getMyStore(data)
        //     console.log(result)
        //     if(!result.code){
        //         commit(GETMYSTORE,result.data)
        //     }else(
        //         commit(GETMYSTORE,{})
        //     )
        // },

        async [STORELOGIN]({commit},data){
            // console.log(data)
            const restult = await storeLogin(data)
            if(!restult.code){
                console.log(restult.data.shops)
                if(restult.data.shops){
                    restult.data.shops = JSON.parse(JsonFilter(restult.data.shops))
                }
                // console.log(JSON.parse(JsonFilter(restult.data.shops))[0].imgurel)
                // if(restult.data.shops){
                //     restult.data.shops.forEach(element => {
                //         element.imgurel = element.shopPics[0].base64URL
                //     });
                // }
                router.replace('/MyStore')
                commit(STORELOGIN,restult.data)
            }
        },
        async [ADDSHOP]({commit},data){
            const result = await addShop(data)
            if(!result.code){
                window.alert('添加成功')
            }
        }
    },
    mutations:{
        [REGISTSTORE](state,registStoreResult){
            state.registStoreResult = registStoreResult
        },
        // [GETMYSTORE](state,store){
        //     state.myStore = store
        // },
        [STORELOGIN](state,store){
            if(!store.shops){
                store.shops= []
            }
            state.myStore=store
        },
        [UPDATASHOPS](state,shop){
            console.log(shop)
            if(shop.imgs.length){
                console.log(1)
                shop.imgurel = shop.imgs[0].imgPath
            }
            state.myStore.shops.push(shop)
        },
        [DELSHOPS](state,index){
            // console.log(index)
            if(state.myStore.shops){
                state.myStore.shops.splice(index,1)
            }
            // console.log(state.myStore.shops)
        }
    },
    getters:{}
}