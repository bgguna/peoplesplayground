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
      name: 'Catchups',
      component: Catchups
    },
    {
      path: '/catchups/add',
      name: 'addcatchup',
      component: addcatchup
    },
    {
      path: '/catchups/:id/edit',
      name: 'editcatchup',
      component: editcatchup
    }
  ]
})
