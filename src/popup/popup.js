import Vue from 'vue'
import App from './App'
import store from '../store'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale });

new Vue({
  el: '#app',
  store,
  
  render: h => h(App)
})

