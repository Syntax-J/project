import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import son from '@/components/son'
import mainPage from '@/components/mainPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'mainPage',
      component: mainPage,
      children:[
        { path:'son',name:'son',component:son }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }

  ]
})
