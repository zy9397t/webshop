//api合集

import instance from './axios'
export function test(){
    let a
    setTimeout(()=>{
        a = 3
        console.log(a)
    },1000)
    a = 4
    return a
    
}

export function registStore(data){
    return instance.post('/registStore',data)
}

// export function getMyStore(data){
//     return instance.post('/loginStore',data)
// }

export function storeLogin(data){
    return instance.post('/loginStore',data)
}

export function userLogin(data){
    return instance.post('/login_pwd',data)
}

export function userRegist(data){
    return instance.post('/registUser',data)
}

export function addShop(data){
    return instance.post('/addShop',data)
}

export function getStores(){
    return instance.get('/getStores')
}

export function apply(data){
    return instance.post('/apply',data)
}

export function getUserOrders(data){
    return instance.post('/getUserOrders',data)
}
export function getStoreOrders(data){
    return instance.post('/getStoreOrders',data)
}
export function changeOrderStatus(data){
    return instance.post('/changeOrderStatus',data)
}

export function adminLogin(data){
    return instance.post('/adminLogin',data)
}

export function searchUsers(data){
    return instance.post('/searchUsers',data)
}
export function changUserStatus(data){
    return instance.post('/changUserStatus',data)
}


