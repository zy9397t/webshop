import axios from 'axios'

const instance  = axios.create({
    // baseURL:'http://localhost:4000',
    timeout:10000
})

instance.interceptors.request.use(config =>{
    return config
})

instance.interceptors.response.use(response => {
    return response.data
},error => {
    alert(error.message)
    return new Promise(()=>{})
})

export default instance 