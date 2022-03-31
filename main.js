import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;



import myIcon from '@/components/icon.vue';
Vue.component('my-icon',myIcon)
import request from '@/common/request';
Vue.prototype.$http = request;

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif