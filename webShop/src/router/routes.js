import Msite from 'pages/Msite'
import Orders from 'pages/Orders'
import Service from 'pages/Service'
import ShopCar from 'pages/ShopCar'
import MyStore from 'pages/MyStore'

import ShopDetail from 'pages/ShopDetail'
import AllShops from 'pages/allShops'


import Login from 'pages/Login'
import Regist from 'pages/Regist'

// import SearchSops from 'pages/searchshops'



export default [
    {
        path:'/Msite',
        component:Msite
    },
    {
        path:'/',
        redirect:'/Msite'
    },


    {
        path:'/Orders',
        component:Orders
    },
    {
        path:'/Service',
        component:Service
    },
    {
        path:'/ShopCar',
        component:ShopCar
    },
    {
        path:'/Login',
        component:Login
    },
    {
        path:'/Regist',
        component:Regist
    },
    {
        path:'/ShopDetail',
        component:ShopDetail
    },
    {
        path:'/MyStore',
        component:MyStore,
        children:[
          
        ] 
    },
    {
        path:'/AllShops',
        component:AllShops
    }
]