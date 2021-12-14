import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Categoy = () => import('views/categoy/Categoy')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

//解决重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const routes = [
    {
        path:"/",
        redirect: "/home"
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/categoy',
        component:Categoy
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/cart',
        component:Cart
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router