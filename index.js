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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var _MapView = __webpack_require__(4);

	var _MapView2 = _interopRequireDefault(_MapView);

	var _Scale = __webpack_require__(7);

	var _Scale2 = _interopRequireDefault(_Scale);

	var _Navigation = __webpack_require__(9);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _MapType = __webpack_require__(11);

	var _MapType2 = _interopRequireDefault(_MapType);

	var _OverviewMap = __webpack_require__(13);

	var _OverviewMap2 = _interopRequireDefault(_OverviewMap);

	var _Geolocation = __webpack_require__(15);

	var _Geolocation2 = _interopRequireDefault(_Geolocation);

	var _Copyright = __webpack_require__(17);

	var _Copyright2 = _interopRequireDefault(_Copyright);

	var _CityList = __webpack_require__(19);

	var _CityList2 = _interopRequireDefault(_CityList);

	var _Marker = __webpack_require__(21);

	var _Marker2 = _interopRequireDefault(_Marker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  install: function install(Vue, options) {
	    var ak = options.ak;

	    Vue.prototype._BMap = function () {
	      return {
	        ak: ak
	      };
	    };
	    Vue.component('baidu-map', _Map2.default);
	    Vue.component('map-view', _MapView2.default);

	    Vue.component('map-control-scale', _Scale2.default);
	    Vue.component('map-control-navigation', _Navigation2.default);
	    Vue.component('map-control-map-type', _MapType2.default);
	    Vue.component('map-control-overview-map', _OverviewMap2.default);
	    Vue.component('map-control-geolocation', _Geolocation2.default);
	    Vue.component('map-control-copyright', _Copyright2.default);
	    Vue.component('map-control-city-list', _CityList2.default);

	    Vue.component('map-overlay-marker', _Marker2.default);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/map/Map.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6a9f0389", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6a9f0389", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Map.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
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
	  name: 'baidu-map',
	  methods: {
	    initMap: function initMap(BMap) {
	      this.$BMap = BMap;
	      this.$emit('ready', BMap);
	    },
	    getMapScript: function getMapScript() {
	      var ak = this._BMap().ak;
	      if (!global.BMap) {
	        return new Promise(function (resolve, reject) {
	          global._initBaiduMap = function () {
	            resolve(global.BMap);
	            global.document.body.removeChild($script);
	            global._initBaiduMap = null;
	          };
	          var $script = document.createElement('script');
	          global.document.body.appendChild($script);
	          $script.src = '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=_initBaiduMap';
	        });
	      }
	      return Promise.resolve(global.BMap);
	    }
	  },
	  created: function created() {
	    var getMapScript = this.getMapScript,
	        initMap = this.initMap;

	    getMapScript().then(initMap);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6a9f0389", module.exports)
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(6)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/map/MapView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b3963164", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-b3963164", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] MapView.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
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

	var mapViewEvents = ['click', 'dblclick', 'rightclick', 'rightdblclick', 'maptypechange', 'mousemove', 'mouseover', 'mouseout', 'movestart', 'moving', 'moveend', 'zoomstart', 'zoomend', 'addoverlay', 'addcontrol', 'removecontrol', 'removeoverlay', 'clearoverlays', 'dragstart', 'dragging', 'dragend', 'addtilelayer', 'removetilelayer', 'load', 'resize', 'hotspotclick', 'hotspotover', 'hotspotout', 'tilesloaded', 'touchstart', 'touchmove', 'touchend', 'longpress'];

	exports.default = {
	  name: 'map-view',
	  props: {
	    center: {
	      type: [Object, String]
	    },
	    zoom: {
	      // type: Number
	    },
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
	    'center.longitude': function centerLongitude(val, oldVal) {
	      var _$parent = this.$parent,
	          $BMap = _$parent.$BMap,
	          map = _$parent.map;

	      var longitude = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && longitude >= -180 && longitude <= 180) {
	        map.setCenter(new $BMap.Point(longitude, this.center.latitude));
	      }
	    },
	    'center.latitude': function centerLatitude(val, oldVal) {
	      var _$parent2 = this.$parent,
	          $BMap = _$parent2.$BMap,
	          map = _$parent2.map;

	      var latitude = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && latitude >= -74 && latitude <= 74) {
	        map.setCenter(new $BMap.Point(this.center.longitude, latitude));
	      }
	    },
	    zoom: function zoom(val, oldVal) {
	      var _$parent3 = this.$parent,
	          $BMap = _$parent3.$BMap,
	          map = _$parent3.map;

	      var zoom = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && zoom >= 3 && zoom <= 19) {
	        map.setZoom(zoom);
	      }
	    },
	    minZoom: function minZoom(val) {
	      map.setMinZoom(val);
	    },
	    maxZoom: function maxZoom(val) {
	      map.setMaxZoom(val);
	    },
	    highResolution: function highResolution() {
	      // Require remount component
	    },
	    mapClick: function mapClick() {
	      // Require remount component
	    },
	    mapType: function mapType(val) {
	      map.setMapType(global[val]);
	    },
	    dragging: function dragging(val) {
	      val ? map.enableDragging() : map.disableDragging();
	    },
	    scrollWheelZoom: function scrollWheelZoom(val) {
	      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
	    },
	    doubleClickZoom: function doubleClickZoom(val) {
	      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
	    },
	    keyboard: function keyboard(val) {
	      val ? map.enableKeyboard() : map.disableKeyboard();
	    },
	    inertialDragging: function inertialDragging(val) {
	      val ? map.enableInertialDragging() : map.disableInertialDragging();
	    },
	    continuousZoom: function continuousZoom(val) {
	      val ? map.enableContinuousZoom() : map.disableContinuousZoom();
	    },
	    pinchToZoom: function pinchToZoom(val) {
	      val ? map.enablePinchToZoom() : map.disablePinchToZoom();
	    },
	    autoResize: function autoResize(val) {
	      val ? map.enableAutoResize() : map.disableAutoResize();
	    }
	  },
	  methods: {
	    setMapOptions: function setMapOptions() {
	      var map = this.$parent.map;
	      var minZoom = this.minZoom,
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
	    bindEvents: function bindEvents() {
	      var _this = this;

	      var map = this.$parent.map;

	      mapViewEvents.forEach(function (event) {
	        map.addEventListener(event, function (arg) {
	          _this.$emit(event, arg);
	        });
	      });
	    },
	    initMap: function initMap(BMap) {
	      var map = this.$parent.map = new BMap.Map(this.$el, { enableHighResolution: this.highResolution, enableMapClick: this.mapClick });
	      var setMapOptions = this.setMapOptions,
	          bindEvents = this.bindEvents,
	          maxZoom = this.maxZoom,
	          zoom = this.zoom,
	          center = this.center,
	          getCenterPoint = this.getCenterPoint;

	      setMapOptions();
	      bindEvents();
	      map.centerAndZoom(getCenterPoint(center), maxZoom || zoom || 3);
	      this.BMap = BMap;
	      this.map = map;
	      this.$emit('ready');
	    },
	    checkType: function checkType(val) {
	      return Object.prototype.toString.call(val).slice(8, -1);
	    },
	    getCenterPoint: function getCenterPoint() {
	      var center = this.center,
	          checkType = this.checkType;
	      var $BMap = this.$parent.$BMap;

	      switch (checkType(center)) {
	        case 'String':
	          return new $BMap.Point(center);
	        case 'Object':
	          return new $BMap.Point(parseFloat(center.longitude), parseFloat(center.latitude));
	        default:
	          return new $BMap.Point();
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$parent.$on('ready', function (BMap) {
	      _this2.initMap(BMap);
	    });
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b3963164", module.exports)
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(8)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/Scale.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-49a7737e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-49a7737e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Scale.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'map-control-scale',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    anchor: {
	      type: String
	    },
	    offset: {
	      type: Object
	    }
	  },
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.ScaleControl({
	        anchor: global[this.anchor],
	        offset: this.offset
	      });
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.removeControl();
	        _this2.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$parent.$on('ready', function () {
	      _this3.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(10)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/Navigation.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-043dd2a6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-043dd2a6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'map-control-navigation',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    anchor: {
	      type: String
	    },
	    offset: {
	      type: Object
	    },
	    type: {
	      type: Object
	    },
	    showZoomInfo: {
	      type: Boolean
	    },
	    enableGeolocation: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    },
	    type: function type() {
	      this.reloadControl();
	    },
	    showZoomInfo: function showZoomInfo() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.NavigationControl({
	        anchor: global[this.anchor],
	        offset: this.offset,
	        type: this.type,
	        showZoomInfo: this.showZoomInfo,
	        enableGeolocation: this.enableGeolocation
	      });
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.removeControl();
	        _this2.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$parent.$on('ready', function () {
	      _this3.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/MapType.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40903426", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-40903426", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] MapType.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'map-control-map-type',
	  render: function render(h) {
	    return;
	  },

	  props: ['type', 'mapTypes', 'anchor', 'offset'],
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    },
	    type: function type() {
	      this.reloadControl();
	    },
	    mapTypes: function mapTypes() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var mapTypes = [];
	      this.mapTypes && this.mapTypes.forEach(function (item) {
	        mapTypes.push(global[item]);
	      });
	      this.control = new BMap.MapTypeControl({
	        anchor: global[this.anchor],
	        offset: this.offset,
	        type: global[this.type],
	        mapTypes: mapTypes
	      });
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.removeControl();
	        _this2.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$parent.$on('ready', function () {
	      _this3.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(14)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/OverviewMap.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4e98865a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4e98865a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] OverviewMap.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var events = ['viewchanged', 'viewchanging'];

	exports.default = {
	  name: 'map-control-overview-map',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    anchor: {
	      type: String
	    },
	    offset: {
	      type: Object
	    },
	    size: {
	      type: Object
	    },
	    isOpen: {
	      type: Boolean
	    }
	  },
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    },
	    size: function size() {
	      this.reloadControl();
	    },
	    isOpen: function isOpen() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var mapTypes = [];
	      this.mapTypes && this.mapTypes.forEach(function (item) {
	        mapTypes.push(global[item]);
	      });
	      this.control = new BMap.OverviewMapControl({
	        anchor: global[this.anchor],
	        offset: this.offset,
	        size: this.size,
	        isOpen: this.isOpen
	      });
	      this.bindEvents();
	      map.addControl(this.control);
	    },
	    bindEvents: function bindEvents() {
	      var _this = this;

	      var control = this.control;

	      events.forEach(function (event) {
	        control.addEventListener(event, function (arg) {
	          _this.$emit(event, arg);
	        });
	      });
	    },
	    removeControl: function removeControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this2.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this2.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        _this3.removeControl();
	        _this3.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    this.$parent.$on('ready', function () {
	      _this4.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(16)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/Geolocation.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f3e89bd", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f3e89bd", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Geolocation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var events = ['locationSuccess', 'locationError'];

	exports.default = {
	  name: 'map-control-geolocation',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    anchor: {
	      type: String
	    },
	    offset: {
	      type: Object
	    },
	    showAddressBar: {
	      type: Boolean
	    },
	    enableAutoLocation: {
	      type: Boolean
	    },
	    locationIcon: {
	      type: Object
	    }
	  },
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    },
	    showAddressBar: function showAddressBar() {
	      this.reloadControl();
	    },
	    enableAutoLocation: function enableAutoLocation() {
	      this.reloadControl();
	    },
	    locationIcon: function locationIcon() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    bindEvents: function bindEvents() {
	      var _this = this;

	      var control = this.control;

	      events.forEach(function (event) {
	        control.addEventListener(event, function (arg) {
	          _this.$emit(event, arg);
	        });
	      });
	    },
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.GeolocationControl({
	        anchor: global[this.anchor],
	        showAddressBar: this.showAddressBar,
	        enableAutoLocation: this.enableAutoLocation,
	        locationIcon: this.locationIcon
	      });
	      this.bindEvents();
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this2.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this2.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        _this3.removeControl();
	        _this3.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    this.$parent.$on('ready', function () {
	      _this4.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(18)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/Copyright.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-220e62be", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-220e62be", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Copyright.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'map-control-copyright',
	  render: function render(h) {
	    return;
	  },

	  props: ['anchor', 'offset', 'copyright'],
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    },
	    copyright: function copyright() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.CopyrightControl({
	        anchor: global[this.anchor],
	        offset: this.offset
	      });
	      this.updateCopyrightList();
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this.control);
	      });
	    },
	    updateCopyrightList: function updateCopyrightList() {
	      var _this2 = this;

	      var _$parent3 = this.$parent,
	          BMap = _$parent3.BMap,
	          map = _$parent3.map;
	      var _control = this.control,
	          removeCopyright = _control.removeCopyright,
	          getCopyrightCollection = _control.getCopyrightCollection;

	      var copyrightList = getCopyrightCollection();
	      copyrightList && copyrightList.forEach(function (item) {
	        _this2.control.removeCopyright(item.id);
	      });
	      this.copyright && this.copyright.forEach(function (item) {
	        var bounds = item.bounds ? new BMap.Bounds(new BMap.Point(item.bounds.sw.longitude, item.bounds.sw.latitude), new BMap.Point(item.bounds.ne.longitude, item.bounds.ne.latitude)) : map.getBounds();
	        _this2.control.addCopyright({
	          id: item.id,
	          content: item.content,
	          bounds: bounds
	        });
	        _this2.control.getCopyrightCollection();
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        _this3.removeControl();
	        _this3.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    this.$parent.$on('ready', function () {
	      _this4.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(20)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/controls/CityList.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1740d702", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1740d702", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] CityList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'map-control-city-list',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    anchor: {
	      type: String
	    },
	    offset: {
	      type: Object
	    }
	  },
	  watch: {
	    anchor: function anchor() {
	      this.reloadControl();
	    },
	    offset: function offset() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.CityListControl({
	        anchor: global[this.anchor],
	        offset: this.offset,
	        onChangeBefore: function onChangeBefore() {
	          this.$emit('changeBefore');
	        },
	        onChangeAfter: function onChangeAfter() {
	          this.$emit('changeAfter');
	        }
	      });
	      map.addControl(this.control);
	    },
	    removeControl: function removeControl() {
	      var _this = this;

	      this.$nextTick(function () {
	        var _$parent2 = _this.$parent,
	            BMap = _$parent2.BMap,
	            map = _$parent2.map;

	        map && map.removeControl(_this.control);
	      });
	    },
	    reloadControl: function reloadControl() {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.removeControl();
	        _this2.addControl();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.$parent.$on('ready', function () {
	      _this3.addControl();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(22)
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
	__vue_options__.__file = "/Users/baidu/Documents/Github/vue-baidu-map/src/overlays/Marker.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6f0550c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6f0550c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Marker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _watch;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var events = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'infowindowclose', 'infowindowopen', 'dragstart', 'dragging', 'dragend', 'rightclick'];

	exports.default = {
	  name: 'map-overlay-marker',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    point: {},
	    offset: {},
	    icon: {},
	    massClear: {
	      type: Boolean,
	      default: true
	    },
	    dragging: {
	      type: Boolean,
	      default: false
	    },
	    clicking: {
	      type: Boolean,
	      default: true
	    },
	    raiseOnDrag: {
	      type: Boolean,
	      default: false
	    },
	    draggingCursor: {
	      type: String
	    },
	    rotation: {
	      type: Number
	    },
	    shadow: {},
	    title: {
	      type: String
	    },
	    animation: {
	      type: String
	    }
	  },
	  watch: (_watch = {
	    point: function point() {},
	    offset: function offset() {},
	    icon: function icon() {},
	    massClear: function massClear(val) {
	      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear();
	    },
	    dragging: function dragging(val) {
	      val ? this.overlay.enableDragging() : this.overlay.disableDragging();
	    },
	    clicking: function clicking() {
	      this.reloadOverlay();
	    },
	    raiseOnDrag: function raiseOnDrag() {
	      this.reloadOverlay();
	    },
	    draggingCursor: function draggingCursor(val) {
	      this.setDraggingCursor(val);
	    },
	    rotation: function rotation(val) {
	      this.setRotation(val);
	    },
	    shadow: function shadow(val) {
	      this.setShadow(val);
	    }
	  }, _defineProperty(_watch, 'shadow', function shadow(val) {
	    this.setTitle(val);
	  }), _defineProperty(_watch, 'animation', function animation(val) {
	    this.setAnimation(global[val]);
	  }), _watch),
	  mounted: function mounted() {
	    var _this = this;

	    var _$parent = this.$parent,
	        BMap = _$parent.BMap,
	        map = _$parent.map;

	    this.$parent.$on('ready', function () {
	      _this.addOverlay();
	    });
	  },

	  methods: {
	    bindEvents: function bindEvents() {
	      var _this2 = this;

	      var overlay = this.overlay;

	      events.forEach(function (event) {
	        overlay.addEventListener(event, function (arg) {
	          _this2.$emit(event, arg);
	        });
	      });
	    },
	    addOverlay: function addOverlay() {
	      var point = this.point,
	          offset = this.offset,
	          icon = this.icon,
	          massClear = this.massClear,
	          dragging = this.dragging,
	          clicking = this.clicking,
	          raiseOnDrag = this.raiseOnDrag,
	          draggingCursor = this.draggingCursor,
	          rotation = this.rotation,
	          shadow = this.shadow,
	          title = this.title,
	          animation = this.animation,
	          bindEvents = this.bindEvents;
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      var overlay = new BMap.Marker(new BMap.Point(point.longitude, point.latitude), {
	        offset: offset,
	        icon: icon,
	        enableMassClear: massClear,
	        enableDragging: dragging,
	        enableClicking: clicking,
	        raiseOnDrag: raiseOnDrag,
	        draggingCursor: draggingCursor,
	        rotation: rotation,
	        shadow: shadow,
	        title: title
	      });
	      this.overlay = overlay;
	      overlay.setAnimation(global[animation]);
	      bindEvents();
	      map.addOverlay(overlay);
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent3 = this.$parent,
	          BMap = _$parent3.BMap,
	          map = _$parent3.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this3 = this;

	      this.$nextTick(function () {
	        _this3.removeOverlay();
	        _this3.addOverlay();
	      });
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;