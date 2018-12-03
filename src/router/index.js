import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import me from '@/components/me'
import data from '@/components/data'
import son00 from '@/components/son00'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'home/me'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path:'me',
          name:'me',
          component:me,
          // children:[{path:'sonson',name:'sonson',components:{son0,b:son00,c:son00}}]
        },
        {
          path:'data',
          name:'data',
          component:data,
          // children:[{path:'sonson',name:'sonson',components:{son0,b:son00,c:son00}}]
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
