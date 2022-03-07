import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vantUI from 'vant'
import 'vant/lib/index.css'
import './assets/js/remScale.js'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
Vue.use(vantUI)
//引入axios核心库
import axios from 'axios'
// 把当前核心库挂载到Vue原型上
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
