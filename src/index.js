import './app.css'
import Vue from 'vue'
import App from './App.vue'

const msg = 'Webpack@4.0.0'
console.log(`${msg}`)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
