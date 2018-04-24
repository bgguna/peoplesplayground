import Vue from 'vue'
import Router from 'vue-router'
import Catchups from '@/components/Catchups'
import AddCatchup from '@/components/AddCatchup'
import EditCatchup from '@/components/EditCatchup'

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
