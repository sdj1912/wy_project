import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        component: () => import('../components/Shouye/Index.vue')
      },
      {
        path: '/classify',
        component: () => import('../components/Classify/Index.vue')
      },
      {
        path: '/cartList',
        component: () => import('../components/CartList/Index.vue')
      },
      {
        path: '/myself',
        component: () => import('../components/Myself/Index.vue'),
      }

    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/addAddress',
    component: () => import('../views/addAddress.vue')
  },
  {
    path: '/myAddress',
    component: () => import('../views/MyAddress.vue')
  },
  {
    path: '/detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/hot',
    component: () => import('../views/Hot.vue')
  },
  {
    path: '/global',
    component: () => import('../views/Global.vue')
  },
  {
    path: '/baby',
    component: () => import('../views/Baby.vue')
  },
  {
    path: '/basicInformation',
    component: () => import('../views/BasicInformation.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
