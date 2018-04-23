import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Catchups from '@/components/Catchups'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'catchups',
      component: Catchups
    },
    {
      path: '/catchups',
      name: 'Catchups',
      component: Catchups
    }
  ]
})
