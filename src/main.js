import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

import Default from './layouts/Default'
import Blank from './layouts/Blank'

Vue.component('default-layout', Default)
Vue.component('blank-layout', Blank)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
