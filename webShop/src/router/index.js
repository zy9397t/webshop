// import vue from 'vue'
import vue from 'vue'
import vueRouter from 'vue-router'

import routes from './routes'

vue.use(vueRouter)

export default new vueRouter({
    // mode:hash,
    routes
})