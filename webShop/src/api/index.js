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

export function getMyStore(data){
    return instance.post('/loginStore',data)
}

export function storeLogin(data){
    return instance.post('/loginStore',data)
}

export function userLogin(data){
    return instance.post('/login_pwd',data)
}

export function userRegist(data){
    return instance.post('/registUser',data)
}


