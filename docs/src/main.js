import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import BaiduMap from '../../src/Map.vue'
import DemoMap from './components/demos/Map.vue'
import DemoControls from './components/demos/Controls.vue'

Vue.use(VueRouter);
Vue.component('baidu-map', BaiduMap);

Vue.component('demo-map', DemoMap);
Vue.component('demo-controls', DemoControls);

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})