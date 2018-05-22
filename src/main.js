// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  components: {Layout},
  template: '<Layout/>'
})
