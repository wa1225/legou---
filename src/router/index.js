import Vue from 'vue'
import VueRouter from 'vue-router'
// // 一级路由
// import Index from '../pages/index'
// import List from '../pages/list'
// import Order from '../pages/order'
// import Detail from '../pages/detail'
// //二级路由
// import Home from '../views/home'
// import Cation from '../views/cation'
// import Mine from '../views/mine'
// import Shop from '../views/shop'

Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:()=>import('../pages/index'),
    children:[
      {
        path:'/home',
        component:()=>import('../views/home')
      },
      {
        path:'/cation',
        component:()=>import('../views/cation')
      },
      {
        path:'/shop',
        component:()=>import('../views/shop')
      },
      {
        path:'/mine',
        component:()=>import('../views/mine')
      },
      {//二级路由重定向
        path:'',
        redirect:'/home'
    }
    ]
  },
  {
    path:'/list',
    component:()=>import('../pages/list'),
  },
  {
    path:'/order',
    component:()=>import('../pages/order')
  }
  ,
  {
    path:'/detail',
    component:()=>import('../pages/detail')
  },
  {
    path:'/login',
    component:()=>import('../pages/login')
  },
  {
    path:'/reg',
    component:()=>import('../pages/reg')
  },
  {
    path:'*',
    redirect:'/index'
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
