import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Update from '../views/update'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/add.vue')
    },
    {
        path: '/update',
        name: 'Update',
        component: Update
        // component: () => import('../components/units')
    }
]

const router = new VueRouter({
    routes
})

export default router
