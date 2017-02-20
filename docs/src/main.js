import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import BaiduMap from 'src/index.js'
import DocPreview from './components/DocPreview.vue'

import Hljs from 'highlight.js'

import 'github-markdown-css'
import 'highlight.js/styles/github.css'
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import './fonts/iconfont.css'

Vue.use(VueRouter);
Vue.use(BaiduMap, {
  ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'
})

Vue.component('doc-preview', DocPreview)

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
})

router.afterEach(route => {
  let blocks = document.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock)
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})