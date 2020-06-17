import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

// layouts
import Default from './layouts/Default'
Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
