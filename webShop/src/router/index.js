// import vue from 'vue'
import vue from 'vue'
import vueRouter from 'vue-router'

import routes from './routes'

vue.use(vueRouter)

const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const originalreplace = vueRouter.prototype.replace
vueRouter.prototype.replace = function replace(location) {
   return originalreplace.call(this, location).catch(err => err)
}

const router = new vueRouter({
    // mode:hash,
    routes
})

// router.beforeEach((to,from,next)=>{
//     console.log(to,from)
//     next()
// })

export default router