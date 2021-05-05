import {REGISTSTORE,STORELOGIN,ADDSHOP,UPDATASHOPS,DELSHOPS,GETSTOREORDERS,CHANGEORDERSTATUS} from '../mutation_types'
import {registStore,storeLogin,addShop,getStoreOrders,changeOrderStatus} from 'api'
import router from '@/router'
import vue from '../../main'
export default {
    state:{
        // registStoreResult:'',
        myStore:'',
        orders:[]
    },
    actions:{

        async [CHANGEORDERSTATUS]({commit},info){
            // console.log(info)
            const { storeId , userId , orderId , orderIndex} = info
            const result = await changeOrderStatus({storeId,userId,orderId})
            if(!result.error){
                vue.$message.success('操作成功')
                commit(CHANGEORDERSTATUS,orderIndex)
            }
        },

        async [REGISTSTORE]({commit},store){
            const result = await registStore(store)
            if(!result.code){
                // window.alert('注册成功！将跳转至登录页面')
                vue.$message.success('注册成功！将跳转至登录页面')
                router.replace('/Login')
            }
        },

        async [GETSTOREORDERS]({commit},storeid){
            const restult = await getStoreOrders({storeid})
            if(!restult.code){
                commit(GETSTOREORDERS,restult.data.orders)
            }
        },

        async [STORELOGIN]({commit},data){
            // console.log(data)
            const restult = await storeLogin(data)
            if(!restult.code){
                // console.log(restult.data.shops)
                if(restult.data.shops){
                    restult.data.shops = JSON.parse(restult.data.shops)
                }
                router.replace('/MyStore')
                commit(STORELOGIN,restult.data)
            }
        },
        async [ADDSHOP]({commit},data){
            const result = await addShop(data)
            if(!result.code){
                vue.$message.success('数据更新成功')
            }
        },
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
        [UPDATASHOPS](state,{type,shop}){
            if(type === 'add'){
                if(shop.imgs.length){
                    shop.imgurel = shop.imgs[0].imgPath
                }
                state.myStore.shops.push(shop)
            }else if(type === 'update'){
                state.myStore.shops.forEach( (element , index) => {
                    if(element.id === shop.id){
                        state.myStore.shops.splice(index,1,shop)
                    }
                })
            }
        },
        [DELSHOPS](state,index){
            // console.log(index)
            if(state.myStore.shops){
                state.myStore.shops.splice(index,1)
            }
            // console.log(state.myStore.shops)
        },
        [GETSTOREORDERS](state,orders){
            state.orders = orders
        },
        [CHANGEORDERSTATUS](state,index){
            state.orders[index].status = 1
        }
    },
    getters:{}
}