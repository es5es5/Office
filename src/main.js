import Vue from 'vue'
import './plugins/axios'
import './plugins/animante-css'
import './plugins/hover-css'
import './plugins/element'
import './plugins/grid-layout'
import './plugins/semantic-ui-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
