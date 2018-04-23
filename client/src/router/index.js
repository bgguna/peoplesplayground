import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Catchups from '@/components/Catchups'
import NewCatchup from '@/components/NewCatchup'

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
    },
    {
      path: '/catchups/new',
      name: 'NewCatchup',
      component: NewCatchup
    }
  ]
})
