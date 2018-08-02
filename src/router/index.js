import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import son from '@/components/son'
import son0 from '@/components/son0'
import son00 from '@/components/son00'

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
        {
          path:'son',
          name:'son',
          component:son,
          children:[{path:'sonson',name:'sonson',components:{son0,b:son00,c:son00}}]

        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }

  ]
})
