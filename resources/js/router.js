import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstVuePage'
import hooks from './components/pages/basic/hooks'


const routes = [
    {
        path: '/',
        component: firstPage
    },
    {
        path: '/hooks',
        component: hooks
    }
]


export default new Router({
    mode: 'history',
    routes

})