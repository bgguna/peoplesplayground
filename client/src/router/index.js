import Vue from 'vue'
import Router from 'vue-router'
import Catchups from '@/components/Catchups'
import addcatchup from '@/components/AddCatchup'
import editcatchup from '@/components/EditCatchup'
import viewcatchup from '@/components/ViewCatchup'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Catchups',
            component: Catchups
        },
        {
            path: '/catchups',
            name: 'Catchups',
            component: Catchups
        },
        {
            path: '/catchups/add',
            component: addcatchup,
            name: 'addcatchup'
        },
        {
            path: '/catchups/:id/edit',
            component: editcatchup,
            name: 'editcatchup'
        },
        {
            path: '/catchups/:id/view',
          component: viewcatchup,
            name: 'viewcatchup'
        }
    ]
})
