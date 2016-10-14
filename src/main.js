import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from '../vuex/store'

Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
