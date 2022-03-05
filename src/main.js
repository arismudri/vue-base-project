import Vue from 'vue'
import App from '@/modules/app/views/App.vue'
import router from '@/modules/app/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
