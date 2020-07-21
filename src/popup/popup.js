import Vue from 'vue'
import App from './App'
import store from '../store'
import ElementUI from 'element-ui';


Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  
  render: h => h(App)
})

