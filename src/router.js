import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Faqs from './views/Faqs.vue'
import Offerings from './views/Offerings.vue'
import Reviews from './views/Reviews.vue'
import Included from './views/Included.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: Faqs
        },
        {
            path: '/offerings',
            name: 'offerings',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/Pricing.vue')
            component: Offerings
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews
        },
        {
            path: '/included',
            name: 'included',
            component: Included
        }
    ]
})

router.afterEach(to => {
    gtag('config', 'UA-147750634-1', { page_path: to.path })
})

export default router
