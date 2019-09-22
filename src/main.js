import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
    console.debug('disabling analytics...')
    gtag('config', 'UA-147750634-1', { send_page_view: false })
} else {
    router.afterEach(to => {
        gtag('config', 'UA-147750634-1', { page_path: to.path })
    })
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
