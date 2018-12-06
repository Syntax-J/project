import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import me from '@/components/me'
import data from '@/components/data'
import race from '@/components/race'
import explore from '@/components/explore'
import stream from '@/components/stream'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/me'
    },
    {
      path: '/',
      name: 'home',
      component:home,
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
        },
        {
          path:'race',
          name:'race',
          component:race,
          // children:[{path:'sonson',name:'sonson',components:{son0,b:son00,c:son00}}]
        },
        {
          path:'explore',
          name:'explore',
          component:explore,
          // children:[{path:'sonson',name:'sonson',components:{son0,b:son00,c:son00}}]
        },
        {
          path:'stream',
          name:'stream',
          component:stream,
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
