import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import BaiduMap from '../../src/index.js'
import {ScaleControl, NavigationControl, MapTypeControl} from '../../src/index.js'
import DemoMap from './components/demos/Map.vue'
import DemoControls from './components/demos/Controls.vue'
import Hljs from 'highlight.js'

Vue.use(VueRouter);
Vue.component('baidu-map', BaiduMap);
Vue.component('scale-control', ScaleControl);
Vue.component('navigation-control', NavigationControl);
Vue.component('map-type-control', MapTypeControl);

Vue.component('demo-map', DemoMap);
Vue.component('demo-controls', DemoControls);

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
});

router.afterEach(route => {
  let blocks = document.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})