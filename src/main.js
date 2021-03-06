import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//引入store

Vue.config.productionTip = false

new Vue({
  router,
  store,//使用store
  render: h => h(App),
}).$mount('#app')
