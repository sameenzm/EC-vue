import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
}).$mount('#app');