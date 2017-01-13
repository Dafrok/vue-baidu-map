/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import App from './components/App.vue'
	import routes from './routes'
	import BaiduMap from '../../src/index.js'
	import {ScaleControl} from '../../src/index.js'
	import DemoMap from './components/demos/Map.vue'
	import DemoControls from './components/demos/Controls.vue'
	import Hljs from 'highlight.js'

	Vue.use(VueRouter);
	Vue.component('baidu-map', BaiduMap);
	Vue.component('scale-control', ScaleControl);

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

/***/ }
/******/ ]);