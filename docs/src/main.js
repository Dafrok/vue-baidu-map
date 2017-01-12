import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import BaiduMap from '../../src/Map.vue'

Vue.use(VueRouter);
Vue.component('baidu-map', BaiduMap);

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})