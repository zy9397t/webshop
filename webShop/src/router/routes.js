import Msite from 'pages/Msite'
import Person from 'pages/Person'
import Service from 'pages/Service'
import ShopCar from 'pages/ShopCar'
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
    }
]