import axios from 'axios'
import {json2Query} from '@/utils'
const instance  = axios.create({
    baseURL:'http://localhost:4000',
    timeout:10000
})

instance.interceptors.request.use(config =>{
   if(config.method.toUpperCase() === 'POST' && config.data !== null){
       config.data = json2Query(config.data)
   }
    return config
})

instance.interceptors.response.use(response => {
    if(response.data.code){
        window.alert(response.data.error)
    }
    return response.data
},error => {
    window.alert(error.message)
    return new Promise(()=>{})
})

export default instance 