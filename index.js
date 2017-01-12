(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueBaiduMap"] = factory();
	else
		root["VueBaiduMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(1)

	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/Map.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0729313c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0729313c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Map.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    // baidu app key
	    ak: {
	      type: String,
	      default: ''
	    },
	    // position
	    position: {
	      type: Object,
	      default: function _default() {
	        return {
	          longitude: 0,
	          latitude: 0
	        };
	      }
	    },
	    // behavior switch
	    minZoom: {
	      type: Number
	    },
	    maxZoom: {
	      type: Number
	    },
	    highResolution: {
	      type: Boolean,
	      default: true
	    },
	    mapClick: {
	      type: Boolean,
	      default: true
	    },
	    mapType: {
	      type: String
	    },
	    dragging: {
	      type: Boolean,
	      default: true
	    },
	    scrollWheelZoom: {
	      type: Boolean,
	      default: false
	    },
	    doubleClickZoom: {
	      type: Boolean,
	      default: true
	    },
	    keyboard: {
	      type: Boolean,
	      default: true
	    },
	    inertialDragging: {
	      type: Boolean,
	      default: false
	    },
	    continuousZoom: {
	      type: Boolean,
	      default: false
	    },
	    pinchToZoom: {
	      type: Boolean,
	      default: true
	    },
	    autoResize: {
	      type: Boolean,
	      default: true
	    }
	  },
	  watch: {
	    'position.latitude': function positionLatitude(val) {
	      var map = this.map,
	          position = this.position;

	      map.setCenter(new BMap.Point(+position.longitude, +val));
	    },
	    'position.longitude': function positionLongitude(val) {
	      var map = this.map,
	          position = this.position;

	      map.setCenter(new BMap.Point(+val, +position.latitude));
	    },
	    'position.zoom': function positionZoom(val) {
	      var map = this.map,
	          position = this.position;

	      map.setZoom(+val);
	    }
	  },
	  methods: {
	    getMapScript: function getMapScript() {
	      var _this = this;

	      if (!global.BMap) {
	        return new Promise(function (resolve, reject) {
	          global._initBaiduMap = function () {
	            resolve();
	            global.document.body.removeChild($script);
	            global._initBaiduMap = null;
	          };
	          var $script = document.createElement('script');
	          global.document.body.appendChild($script);
	          $script.src = '//api.map.baidu.com/api?v=2.0&ak=' + _this.ak + '&callback=_initBaiduMap';
	        });
	      }
	      return Promise.resolve();
	    },
	    setMapOptions: function setMapOptions() {
	      var map = this.map,
	          minZoom = this.minZoom,
	          maxZoom = this.maxZoom,
	          mapType = this.mapType,
	          dragging = this.dragging,
	          scrollWheelZoom = this.scrollWheelZoom,
	          doubleClickZoom = this.doubleClickZoom,
	          keyboard = this.keyboard,
	          inertialDragging = this.inertialDragging,
	          continuousZoom = this.continuousZoom,
	          pinchToZoom = this.pinchToZoom,
	          autoResize = this.autoResize;

	      minZoom && map.setMinZoom(minZoom);
	      maxZoom && map.setMaxZoom(maxZoom);
	      mapType && map.setMapType(global[mapType]);
	      dragging ? map.enableDragging() : map.disableDragging();
	      scrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
	      doubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
	      keyboard ? map.enableKeyboard() : map.disableKeyboard();
	      inertialDragging ? map.enableInertialDragging() : map.disableInertialDragging();
	      continuousZoom ? map.enableContinuousZoom() : map.disableContinuousZoom();
	      pinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom();
	      autoResize ? map.enableAutoResize() : map.disableAutoResize();
	    },
	    updatePosition: function updatePosition() {
	      var point = this.map.getCenter();
	      var zoom = this.map.getZoom();
	      this.$emit('change', {
	        longitude: point.lng,
	        latitude: point.lat,
	        zoom: zoom
	      });
	    },
	    bindEvents: function bindEvents() {
	      var map = this.map,
	          updatePosition = this.updatePosition;

	      map.addEventListener('moving', function (e) {
	        updatePosition();
	      });
	      map.addEventListener('moveend', function (e) {
	        updatePosition();
	      });

	      /*map.addEventListener('touchstart', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('touchmove', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('touchend', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('resize', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('load', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('dragstart', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('dragging', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('dragend', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('zoomstart', (e) => {
	        updatePosition()
	      })
	      map.addEventListener('zoomend', (e) => {
	        updatePosition()
	      })*/
	    },
	    initMap: function initMap() {
	      this.map = new BMap.Map(this.$el, { enableHighResolution: this.highResolution, enableMapClick: this.mapClick });
	      var map = this.map,
	          position = this.position,
	          setMapOptions = this.setMapOptions,
	          bindEvents = this.bindEvents,
	          maxZoom = this.maxZoom;

	      setMapOptions();
	      bindEvents();
	      map.centerAndZoom(new BMap.Point(position.longitude, position.latitude), maxZoom || position.zoom || 3);
	    }
	  },
	  mounted: function mounted() {
	    var getMapScript = this.getMapScript,
	        initMap = this.initMap;

	    getMapScript().then(initMap);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0729313c", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;