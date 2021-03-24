import Msite from 'pages/Msite'
import Person from 'pages/Person'
import Service from 'pages/Service'
import ShopCar from 'pages/ShopCar'


import Login from 'pages/Login'
import Regist from 'pages/Regist'


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
        path:'/Person',
        component:Person
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
    }
]