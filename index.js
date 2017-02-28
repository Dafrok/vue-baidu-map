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

	var _Scale = __webpack_require__(9);

	var _Scale2 = _interopRequireDefault(_Scale);

	var _Navigation = __webpack_require__(11);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _MapType = __webpack_require__(13);

	var _MapType2 = _interopRequireDefault(_MapType);

	var _OverviewMap = __webpack_require__(15);

	var _OverviewMap2 = _interopRequireDefault(_OverviewMap);

	var _Geolocation = __webpack_require__(17);

	var _Geolocation2 = _interopRequireDefault(_Geolocation);

	var _Copyright = __webpack_require__(19);

	var _Copyright2 = _interopRequireDefault(_Copyright);

	var _CityList = __webpack_require__(21);

	var _CityList2 = _interopRequireDefault(_CityList);

	var _Marker = __webpack_require__(23);

	var _Marker2 = _interopRequireDefault(_Marker);

	var _Polyline = __webpack_require__(26);

	var _Polyline2 = _interopRequireDefault(_Polyline);

	var _Polygon = __webpack_require__(28);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Circle = __webpack_require__(30);

	var _Circle2 = _interopRequireDefault(_Circle);

	var _Label = __webpack_require__(32);

	var _Label2 = _interopRequireDefault(_Label);

	var _InfoWindow = __webpack_require__(34);

	var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

	var _menu = __webpack_require__(37);

	var _menu2 = _interopRequireDefault(_menu);

	var _item = __webpack_require__(40);

	var _item2 = _interopRequireDefault(_item);

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
	    Vue.component('map-overlay-polyline', _Polyline2.default);
	    Vue.component('map-overlay-polygon', _Polygon2.default);
	    Vue.component('map-overlay-circle', _Circle2.default);
	    Vue.component('map-overlay-label', _Label2.default);
	    Vue.component('map-overlay-info-window', _InfoWindow2.default);

	    Vue.component('map-context-menu', _menu2.default);
	    Vue.component('map-context-menu-item', _item2.default);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\map\\Map.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d9fda8a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7d9fda8a", __vue_options__)
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
	     require("vue-hot-reload-api").rerender("data-v-7d9fda8a", module.exports)
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
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\map\\MapView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-22670d80", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-22670d80", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] MapView.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    },
	    theme: {
	      type: Array
	    }
	  },
	  watch: {
	    'center.lng': function centerLng(val, oldVal) {
	      var $BMap = this.$parent.$BMap;
	      var map = this.map;

	      var lng = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
	        map.setCenter(new $BMap.Point(lng, this.center.lat));
	      }
	    },
	    'center.lat': function centerLat(val, oldVal) {
	      var $BMap = this.$parent.$BMap;
	      var map = this.map;

	      var lat = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
	        map.setCenter(new $BMap.Point(this.center.lng, lat));
	      }
	    },
	    zoom: function zoom(val, oldVal) {
	      var $BMap = this.$parent.$BMap;
	      var map = this.map;

	      var zoom = parseFloat(val);
	      if (val.toString() !== oldVal.toString() && zoom >= 3 && zoom <= 19) {
	        map.setZoom(zoom);
	      }
	    },
	    minZoom: function minZoom(val) {
	      var map = this.map;

	      map.setMinZoom(val);
	    },
	    maxZoom: function maxZoom(val) {
	      var map = this.map;

	      map.setMaxZoom(val);
	    },
	    highResolution: function highResolution() {
	      // Require remount component
	    },
	    mapClick: function mapClick() {
	      // Require remount component
	    },
	    mapType: function mapType(val) {
	      var map = this.map;

	      map.setMapType(global[val]);
	    },
	    dragging: function dragging(val) {
	      var map = this.map;

	      val ? map.enableDragging() : map.disableDragging();
	    },
	    scrollWheelZoom: function scrollWheelZoom(val) {
	      var map = this.map;

	      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
	    },
	    doubleClickZoom: function doubleClickZoom(val) {
	      var map = this.map;

	      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
	    },
	    keyboard: function keyboard(val) {
	      var map = this.map;

	      val ? map.enableKeyboard() : map.disableKeyboard();
	    },
	    inertialDragging: function inertialDragging(val) {
	      var map = this.map;

	      val ? map.enableInertialDragging() : map.disableInertialDragging();
	    },
	    continuousZoom: function continuousZoom(val) {
	      var map = this.map;

	      val ? map.enableContinuousZoom() : map.disableContinuousZoom();
	    },
	    pinchToZoom: function pinchToZoom(val) {
	      var map = this.map;

	      val ? map.enablePinchToZoom() : map.disablePinchToZoom();
	    },
	    autoResize: function autoResize(val) {
	      var map = this.map;

	      val ? map.enableAutoResize() : map.disableAutoResize();
	    },
	    theme: function theme(val) {
	      map.setMapStyle({ styleJson: val });
	    }
	  },
	  methods: {
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
	    init: function init(BMap) {
	      var map = new BMap.Map(this.$el, { enableHighResolution: this.highResolution, enableMapClick: this.mapClick });
	      this.map = map;
	      var setMapOptions = this.setMapOptions,
	          maxZoom = this.maxZoom,
	          zoom = this.zoom,
	          center = this.center,
	          getCenterPoint = this.getCenterPoint,
	          theme = this.theme;

	      map.setMapStyle({ styleJson: theme });
	      setMapOptions();
	      _bindEvent2.default.call(this, map);
	      map.centerAndZoom(getCenterPoint(center), maxZoom || zoom || 3);
	      this.BMap = BMap;
	      this.$emit('ready', { BMap: BMap, map: map });
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
	          return new $BMap.Point(parseFloat(center.lng), parseFloat(center.lat));
	        default:
	          return new $BMap.Point();
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$parent.$on('ready', function (BMap) {
	      _this.init(BMap);
	    });
	  }
	}; //
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (instance) {
	  var _this = this;

	  _events2.default[this.$options._componentTag].forEach(function (event) {
	    instance.addEventListener(event, function (arg) {
	      _this.$emit(event, arg);
	    });
	  });
	};

	var _events = __webpack_require__(7);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'map-view': ['click', 'dblclick', 'rightclick', 'rightdblclick', 'maptypechange', 'mousemove', 'mouseover', 'mouseout', 'movestart', 'moving', 'moveend', 'zoomstart', 'zoomend', 'addoverlay', 'addcontrol', 'removecontrol', 'removeoverlay', 'clearoverlays', 'dragstart', 'dragging', 'dragend', 'addtilelayer', 'removetilelayer', 'load', 'resize', 'hotspotclick', 'hotspotover', 'hotspotout', 'tilesloaded', 'touchstart', 'touchmove', 'touchend', 'longpress'],
	  'map-control-geolocation': ['locationSuccess', 'locationError'],
	  'map-control-overview-map': ['viewchanged', 'viewchanging'],
	  'map-overlay-marker': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'infowindowclose', 'infowindowopen', 'dragstart', 'dragging', 'dragend', 'rightclick'],
	  'map-overlay-polyline': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
	  'map-overlay-polygon': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
	  'map-overlay-circle': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
	  'map-overlay-label': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'rightclick'],
	  'map-overlay-info-window': ['close', 'open', 'maximize', 'restore', 'clickclose']
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-22670d80", module.exports)
	  }
	}

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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\Scale.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f236056", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5f236056", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Scale.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 10 */
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\Navigation.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a09e999", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a09e999", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 12 */
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\MapType.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e6c44afe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e6c44afe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] MapType.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\OverviewMap.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-778a10ee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-778a10ee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] OverviewMap.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	      _bindEvent2.default.call(this, this.control);
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\Geolocation.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-58301451", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-58301451", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Geolocation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    autoLocation: {
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
	    autoLocation: function autoLocation() {
	      this.reloadControl();
	    },
	    locationIcon: function locationIcon() {
	      this.reloadControl();
	    }
	  },
	  methods: {
	    addControl: function addControl() {
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      this.control = new BMap.GeolocationControl({
	        anchor: global[this.anchor],
	        showAddressBar: this.showAddressBar,
	        enableAutoLocation: this.autoLocation,
	        locationIcon: this.locationIcon
	      });
	      _bindEvent2.default.call(this, this.control);
	      map.addControl(this.control);
	      global.map = map;
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\Copyright.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2d498252", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2d498252", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Copyright.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
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
	        var bounds = item.bounds ? new BMap.Bounds(new BMap.Point(item.bounds.sw.lng, item.bounds.sw.lat), new BMap.Point(item.bounds.ne.lng, item.bounds.ne.lat)) : map.getBounds();
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\controls\\CityList.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-071974ee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-071974ee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] CityList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 22 */
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

	      var _instance = this;
	      this.control = new BMap.CityListControl({
	        anchor: global[this.anchor],
	        offset: this.offset,
	        onChangeBefore: function onChangeBefore() {
	          _instance.$emit('changeBefore');
	        },
	        onChangeAfter: function onChangeAfter() {
	          _instance.$emit('changeAfter');
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
	    var map = this.$parent.map;
	    var addControl = this.addControl;

	    map ? addControl() : this.$parent.$on('ready', addControl);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeControl();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(24)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\Marker.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-220479b2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-220479b2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Marker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _props, _watch;

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'map-overlay-marker',
	  render: function render(h) {
	    return;
	  },

	  props: (_props = {
	    point: {},
	    label: {},
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
	    }
	  }, _defineProperty(_props, 'label', {}), _defineProperty(_props, 'animation', {
	    type: String
	  }), _defineProperty(_props, 'top', {
	    type: Boolean,
	    default: false
	  }), _props),
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
	  }), _defineProperty(_watch, 'label', function label(val) {
	    this.reloadOverlay();
	  }), _defineProperty(_watch, 'animation', function animation(val) {
	    this.setAnimation(global[val]);
	  }), _defineProperty(_watch, 'top', function top(val) {
	    this.overlay.setTop(val);
	  }), _watch),
	  mounted: function mounted() {
	    var map = this.$parent.map;
	    var addOverlay = this.addOverlay;

	    map ? addOverlay() : this.$parent.$on('ready', addOverlay);
	  },

	  methods: {
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
	          label = this.label,
	          animation = this.animation,
	          top = this.top,
	          addLabel = this.addLabel;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var overlay = new BMap.Marker(new BMap.Point(point.lng, point.lat), {
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
	      label && overlay && overlay.setLabel((0, _factory.createLabel)(BMap, label));
	      overlay.setTop(top);
	      _bindEvent2.default.call(this, overlay);
	      map.addOverlay(overlay);
	      overlay.setAnimation(global[animation]);
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPoint = createPoint;
	exports.createPixel = createPixel;
	exports.createBounds = createBounds;
	exports.createSize = createSize;
	exports.createIcon = createIcon;
	exports.createLabel = createLabel;
	function createPoint(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var lng = options.lng,
	      lat = options.lat;

	  return new BMap.Point(parseFloat(lng), parseFloat(lat));
	}

	function createPixel(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var x = options.x,
	      y = options.y;

	  return new BMap.Pixel(parseFloat(x), parseFloat(y));
	}

	function createBounds(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var sw = options.sw,
	      ne = options.ne;

	  return new BMap.Bounds(createPoint(BMap, sw), createPoint(BMap, ne));
	}

	function createSize(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var width = options.width,
	      height = options.height;

	  return new BMap.Size(parseFloat(width), parseFloat(height));
	}

	function createIcon(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var url = options.url,
	      size = options.size,
	      opts = options.opts;

	  return new BMap.Icon(url, createSize(size), {
	    anchor: anchor && createSize(BMap, opts.anchor),
	    imageOffset: imageOffset && createSize(BMap, opts.imageOffset),
	    infoWindowAnchor: infoWindowAnchor && createSize(BMap, opts.infoWindowAnchor),
	    printImageUrl: printImageUrl
	  });
	}

	function createLabel(BMap) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var content = options.content,
	      opts = options.opts;

	  return new BMap.Label(content, {
	    offset: opts.offset && createSize(BMap, opts.offset),
	    position: opts.position && createPoint(BMap, opts.position),
	    enableMassClear: opts.enableMassClear
	  });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(27)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\Polyline.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-90c08790", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-90c08790", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Polyline.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _watch;

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'map-overlay-polyline',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    points: {
	      type: Array
	    },
	    strokeColor: {
	      type: String
	    },
	    strokeWeight: {
	      type: Number
	    },
	    strokeOpacity: {
	      type: Number
	    },
	    strokeStyle: {
	      type: String
	    },
	    massClear: {
	      type: Boolean,
	      default: true
	    },
	    clicking: {
	      type: Boolean,
	      default: true
	    },
	    editing: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: (_watch = {
	    points: {
	      handler: function handler(val, oldVal) {
	        this.reloadOverlay();
	      },

	      deep: true
	    },
	    strokeColor: function strokeColor(val) {
	      this.overlay.setStrokeColor(val);
	    }
	  }, _defineProperty(_watch, 'strokeColor', function strokeColor(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'strokeWeight', function strokeWeight(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'editing', function editing(val) {
	    val ? this.overlay.enableEditing() : this.overlay.disableEditing();
	  }), _defineProperty(_watch, 'massClear', function massClear(val) {
	    val ? this.overlay.enableMassClear() : this.overlay.disableMassClear();
	  }), _defineProperty(_watch, 'clicking', function clicking(val) {
	    this.reloadOverlay();
	  }), _watch),
	  methods: {
	    addOverlay: function addOverlay() {
	      var points = this.points,
	          strokeColor = this.strokeColor,
	          strokeWeight = this.strokeWeight,
	          strokeOpacity = this.strokeOpacity,
	          strokeStyle = this.strokeStyle,
	          editing = this.editing,
	          massClear = this.massClear,
	          clicking = this.clicking;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var overlay = new BMap.Polyline(points.map(function (item) {
	        return (0, _factory.createPoint)(BMap, { lng: item.lng, lat: item.lat });
	      }), {
	        strokeColor: strokeColor,
	        strokeWeight: strokeWeight,
	        strokeOpacity: strokeOpacity,
	        strokeStyle: strokeStyle,
	        enableEditing: editing,
	        enableMassClear: massClear,
	        enableClicking: clicking
	      });
	      this.overlay = overlay;
	      map.addOverlay(overlay);
	      _bindEvent2.default.call(this, overlay);
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var map = this.$parent.map;
	    var addOverlay = this.addOverlay;

	    map ? addOverlay() : this.$parent.$on('ready', addOverlay);
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(29)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\Polygon.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-53f4121c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-53f4121c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Polygon.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _watch;

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'map-overlay-polygon',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    points: {
	      type: Array
	    },
	    strokeColor: {
	      type: String
	    },
	    strokeWeight: {
	      type: Number
	    },
	    strokeOpacity: {
	      type: Number
	    },
	    strokeStyle: {
	      type: String
	    },
	    fillColor: {
	      type: String
	    },
	    fillOpacity: {
	      type: Number
	    },
	    massClear: {
	      type: Boolean,
	      default: true
	    },
	    clicking: {
	      type: Boolean,
	      default: true
	    },
	    editing: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: (_watch = {
	    points: {
	      handler: function handler(val, oldVal) {
	        this.reloadOverlay();
	      },

	      deep: true
	    },
	    strokeColor: function strokeColor(val) {
	      this.overlay.setStrokeColor(val);
	    }
	  }, _defineProperty(_watch, 'strokeColor', function strokeColor(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'strokeWeight', function strokeWeight(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'fillColor', function fillColor(val) {
	    this.overlay.setFillColor(val);
	  }), _defineProperty(_watch, 'fillOpacity', function fillOpacity(val) {
	    this.overlay.setFillOpacity(val);
	  }), _defineProperty(_watch, 'editing', function editing(val) {
	    val ? this.overlay.enableEditing() : this.overlay.disableEditing();
	  }), _defineProperty(_watch, 'massClear', function massClear(val) {
	    val ? this.overlay.enableMassClear() : this.overlay.disableMassClear();
	  }), _defineProperty(_watch, 'clicking', function clicking(val) {
	    this.reloadOverlay();
	  }), _watch),
	  methods: {
	    addOverlay: function addOverlay() {
	      var points = this.points,
	          strokeColor = this.strokeColor,
	          strokeWeight = this.strokeWeight,
	          strokeOpacity = this.strokeOpacity,
	          strokeStyle = this.strokeStyle,
	          fillColor = this.fillColor,
	          fillOpacity = this.fillOpacity,
	          editing = this.editing,
	          massClear = this.massClear,
	          clicking = this.clicking;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var overlay = new BMap.Polygon(points.map(function (item) {
	        return (0, _factory.createPoint)(BMap, { lng: item.lng, lat: item.lat });
	      }), {
	        strokeColor: strokeColor,
	        strokeWeight: strokeWeight,
	        strokeOpacity: strokeOpacity,
	        strokeStyle: strokeStyle,
	        fillColor: fillColor,
	        fillOpacity: fillOpacity,
	        // enableEditing: editing,
	        enableMassClear: massClear,
	        enableClicking: clicking
	      });
	      this.overlay = overlay;
	      map.addOverlay(overlay);
	      _bindEvent2.default.call(this, overlay);
	      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
	      editing ? overlay.enableEditing() : overlay.disableEditing();
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var map = this.$parent.map;
	    var addOverlay = this.addOverlay;

	    map ? addOverlay() : this.$parent.$on('ready', addOverlay);
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(31)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\Circle.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c55b3170", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c55b3170", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Circle.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _watch;

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'map-overlay-circle',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    center: {},
	    radius: {},
	    strokeColor: {
	      type: String
	    },
	    strokeWeight: {
	      type: Number
	    },
	    strokeOpacity: {
	      type: Number
	    },
	    strokeStyle: {
	      type: String
	    },
	    fillColor: {
	      type: String
	    },
	    fillOpacity: {
	      type: Number
	    },
	    massClear: {
	      type: Boolean,
	      default: true
	    },
	    clicking: {
	      type: Boolean,
	      default: true
	    },
	    editing: {
	      type: Boolean,
	      default: false
	    }
	  },
	  watch: (_watch = {
	    'center.lng': function centerLng(val, oldVal) {
	      // this.overlay.disableEditing()
	      var BMap = this.$parent.BMap;

	      var lng = val;
	      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
	        this.overlay.setCenter((0, _factory.createPoint)(BMap, { lng: lng, lat: this.center.lat }));
	      }
	      // this.overlay.enableEditing()
	    },
	    'center.lat': function centerLat(val, oldVal) {
	      // this.overlay.disableEditing()
	      var BMap = this.$parent.BMap;

	      var lat = val;
	      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
	        this.overlay.setCenter((0, _factory.createPoint)(BMap, { lng: this.center.lng, lat: lat }));
	      }
	      // this.overlay.enableEditing()
	    },
	    radius: function radius(val, oldVal) {
	      // this.overlay.disableEditing()
	      this.overlay.setRadius(val);
	      // this.overlay.enableEditing()
	    },
	    strokeColor: function strokeColor(val) {
	      this.overlay.setStrokeColor(val);
	    }
	  }, _defineProperty(_watch, 'strokeColor', function strokeColor(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'strokeWeight', function strokeWeight(val) {
	    this.overlay.setStrokeOpacity(val);
	  }), _defineProperty(_watch, 'fillColor', function fillColor(val) {
	    this.overlay.setFillColor(val);
	  }), _defineProperty(_watch, 'fillOpacity', function fillOpacity(val) {
	    this.overlay.setFillOpacity(val);
	  }), _defineProperty(_watch, 'editing', function editing(val) {
	    val ? this.overlay.enableEditing() : this.overlay.disableEditing();
	  }), _defineProperty(_watch, 'massClear', function massClear(val) {
	    val ? this.overlay.enableMassClear() : this.overlay.disableMassClear();
	  }), _defineProperty(_watch, 'clicking', function clicking(val) {
	    this.reloadOverlay();
	  }), _watch),
	  methods: {
	    addOverlay: function addOverlay() {
	      var center = this.center,
	          radius = this.radius,
	          strokeColor = this.strokeColor,
	          strokeWeight = this.strokeWeight,
	          strokeOpacity = this.strokeOpacity,
	          strokeStyle = this.strokeStyle,
	          fillColor = this.fillColor,
	          fillOpacity = this.fillOpacity,
	          editing = this.editing,
	          massClear = this.massClear,
	          clicking = this.clicking;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var overlay = new BMap.Circle((0, _factory.createPoint)(BMap, { lng: center.lng, lat: center.lat }), radius, {
	        strokeColor: strokeColor,
	        strokeWeight: strokeWeight,
	        strokeOpacity: strokeOpacity,
	        strokeStyle: strokeStyle,
	        fillColor: fillColor,
	        fillOpacity: fillOpacity,
	        // enableEditing: editing,
	        enableMassClear: massClear,
	        enableClicking: clicking
	      });
	      this.overlay = overlay;
	      map.addOverlay(overlay);
	      _bindEvent2.default.call(this, overlay);
	      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
	      editing ? overlay.enableEditing() : overlay.disableEditing();
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this && this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var map = this.$parent.map;
	    var addOverlay = this.addOverlay;

	    map ? addOverlay() : this.$parent.$on('ready', addOverlay);
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(33)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\Label.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-191f88a8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-191f88a8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Label.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'map-overlay-label',
	  render: function render(h) {
	    return;
	  },

	  props: {
	    content: {
	      type: String
	    },
	    title: {
	      type: String
	    },
	    offset: {},
	    position: {},
	    labelStyle: {},
	    zIndex: {},
	    massClear: {
	      type: Boolean,
	      default: true
	    }
	  },
	  watch: {
	    content: function content(val) {
	      this.overlay.setContent(val);
	    },
	    title: function title(val) {
	      this.overlay.setTitle(val);
	    },
	    'offset.width': function offsetWidth(val, oldVal) {
	      var BMap = this.$parent.BMap;

	      if (val.toString() !== oldVal.toString()) {
	        this.overlay.setOffset((0, _factory.createSize)(BMap, { width: val, height: this.offset.height }));
	      }
	    },
	    'offset.height': function offsetHeight(val) {
	      var BMap = this.$parent.BMap;

	      if (val.toString() !== oldVal.toString()) {
	        this.overlay.setOffset((0, _factory.createSize)(BMap, { width: this.offset.width, height: val }));
	      }
	    },
	    'position.lng': function positionLng(val, oldVal) {
	      var BMap = this.$parent.BMap;

	      var lng = val;
	      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
	        this.overlay.setCenter((0, _factory.createPoint)(BMap, { lng: lng, lat: this.center.lat }));
	      }
	    },
	    'position.lat': function positionLat(val, oldVal) {
	      var BMap = this.$parent.BMap;

	      var lat = val;
	      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
	        this.overlay.setCenter((0, _factory.createPoint)(BMap, { lng: this.center.lng, lat: lat }));
	      }
	    },

	    labelStyle: {
	      handler: function handler(val) {
	        this.overlay.setStyle(val);
	      },

	      deep: true
	    },
	    zIndex: function zIndex(val) {
	      this.overlay.setZIndex(val);
	    },
	    massClear: function massClear(val) {
	      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear();
	    }
	  },
	  methods: {
	    addOverlay: function addOverlay() {
	      var content = this.content,
	          title = this.title,
	          offset = this.offset,
	          position = this.position,
	          labelStyle = this.labelStyle,
	          zIndex = this.zIndex,
	          massClear = this.massClear;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var overlay = new BMap.Label(content, {
	        offset: (0, _factory.createSize)(BMap, offset),
	        position: (0, _factory.createPoint)(BMap, position),
	        enableMassClear: massClear
	      });
	      this.overlay = overlay;
	      map.addOverlay(overlay);
	      title && overlay.setTitle(title);
	      labelStyle && overlay.setStyle(labelStyle);
	      zIndex && overlay.setZIndex(zIndex);
	      _bindEvent2.default.call(this, overlay);
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this && this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$parent.$on('ready', function () {
	      var map = _this2.$parent.map;
	      var addOverlay = _this2.addOverlay;

	      map ? addOverlay() : _this2.$parent.$on('ready', addOverlay);
	    });
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(36)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\overlays\\InfoWindow.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-63e1c5b6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-63e1c5b6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] InfoWindow.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bindEvent = __webpack_require__(6);

	var _bindEvent2 = _interopRequireDefault(_bindEvent);

	var _factory = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//

	exports.default = {
	  name: 'map-overlay-info-window',
	  props: {
	    show: {
	      type: Boolean
	    },
	    position: {
	      type: Object
	    },
	    title: {
	      type: String
	    },
	    width: {
	      type: Number
	    },
	    height: {
	      type: Number
	    },
	    maxWidth: {
	      type: Number
	    },
	    offset: {
	      type: Object
	    },
	    maximize: {
	      type: Boolean
	    },
	    autoPan: {
	      type: Boolean
	    },
	    closeOnClick: {
	      type: Boolean
	    },
	    message: {
	      type: String
	    }
	  },
	  watch: {
	    show: function show(val) {
	      val ? this.openInfoWindow() : this.closeInfoWindow();
	    },
	    'position.lng': function positionLng(val, oldVal) {
	      this.reloadOverlay();
	    },
	    'position.lat': function positionLat(val, oldVal) {
	      this.reloadOverlay();
	    },
	    'offset.width': function offsetWidth(val, oldVal) {
	      this.reloadOverlay();
	    },
	    'offset.height': function offsetHeight(val) {
	      this.reloadOverlay();
	    },
	    maxWidth: function maxWidth() {
	      this.reloadOverlay();
	    },
	    width: function width(val) {
	      this.overlay.setWidth(val);
	    },
	    height: function height(val) {
	      this.overlay.setHeight(val);
	    },
	    title: function title(val) {
	      this.overlay.setTitle(val);
	    },
	    maximize: function maximize(val) {
	      val ? this.overlay.enableMaximize() : this.overlay.disableMaximize();
	    },
	    autoPan: function autoPan(val) {
	      val ? this.overlay.enableAutoPan() : this.overlay.disableAutoPan();
	    },
	    closeOnClick: function closeOnClick(val) {
	      val ? this.overlay.enableCloseOnClick() : this.overlay.disableCloseOnClick();
	    }
	  },
	  methods: {
	    addOverlay: function addOverlay() {
	      var show = this.show,
	          position = this.position,
	          title = this.title,
	          width = this.width,
	          height = this.height,
	          maxWidth = this.maxWidth,
	          offset = this.offset,
	          autoPan = this.autoPan,
	          closeOnClick = this.closeOnClick,
	          message = this.message,
	          maximize = this.maximize,
	          bindObserver = this.bindObserver;
	      var _$parent = this.$parent,
	          BMap = _$parent.BMap,
	          map = _$parent.map;

	      var $content = this.$el;
	      var overlay = new BMap.InfoWindow($content, {
	        width: width, // 信息窗口宽度
	        height: height, // 信息窗口高度
	        title: title, // 信息窗口标题
	        maxWidth: maxWidth,
	        offset: (0, _factory.createSize)(BMap, offset),
	        enableAutoPan: autoPan,
	        enableCloseOnClick: closeOnClick,
	        enableMessage: typeof message === 'undefined', //设置允许信息窗发送短息
	        message: message
	      });

	      maximize ? overlay.enableMaximize() : overlay.disableMaximize();
	      _bindEvent2.default.call(this, overlay);
	      this.overlay = overlay;
	      overlay.redraw();[].forEach.call($content.querySelectorAll('img'), function ($img) {
	        return $img.onload = function () {
	          return overlay.redraw();
	        };
	      });
	      bindObserver();
	      this.$container = map; // map or marker
	      show && this.openInfoWindow();
	    },
	    bindObserver: function bindObserver() {
	      if (!MutationObserver) {
	        return;
	      }
	      var $el = this.$el,
	          overlay = this.overlay;

	      this.observer = new MutationObserver(function (mutations) {
	        return overlay.redraw();
	      });
	      this.observer.observe($el, { attributes: true, childList: true, characterData: true, subtree: true });
	    },
	    openInfoWindow: function openInfoWindow() {
	      var $container = this.$container,
	          position = this.position,
	          overlay = this.overlay;
	      var _$parent2 = this.$parent,
	          BMap = _$parent2.BMap,
	          map = _$parent2.map;

	      $container.openInfoWindow(overlay, (0, _factory.createPoint)(BMap, position));
	    },
	    closeInfoWindow: function closeInfoWindow() {
	      this.$container.closeInfoWindow(this.overlay);
	    },
	    removeOverlay: function removeOverlay() {
	      var _$parent3 = this.$parent,
	          BMap = _$parent3.BMap,
	          map = _$parent3.map;

	      map.removeOverlay(this.overlay);
	    },
	    reloadOverlay: function reloadOverlay() {
	      var _this = this;

	      this && this.$nextTick(function () {
	        _this.removeOverlay();
	        _this.addOverlay();
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.observer && this.observer.disconnect();
	  },
	  mounted: function mounted() {
	    var map = this.$parent.map;
	    var addOverlay = this.addOverlay;

	    map ? addOverlay() : this.$parent.$on('ready', addOverlay);
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-63e1c5b6", module.exports)
	  }
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\context-menu\\menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5e0fa55d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5e0fa55d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'map-context-menu',
	  props: {
	    width: {
	      type: Number
	    }
	  },
	  methods: {
	    addContextMenu: function addContextMenu(BMap, parent, map) {
	      var _this = this;

	      var menu = this.menu = new BMap.ContextMenu();
	      this.parent = parent;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        var _loop = function _loop() {
	          var item = _step.value;

	          if (item.seperator) {
	            menu.addSeparator();
	            return 'continue';
	          }
	          var menuItem = new BMap.MenuItem(item.text, function (point, pixel) {
	            item.callback({
	              point: point,
	              pixel: pixel,
	              BMap: BMap,
	              map: map,
	              target: parent
	            });
	          }, {
	            width: _this.width,
	            id: item.id,
	            iconUrl: item.iconUrl
	          });
	          item.disabled ? menuItem.disable() : menuItem.enable();
	          menu.addItem(menuItem);
	        };

	        for (var _iterator = this.$children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _ret = _loop();

	          if (_ret === 'continue') continue;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      parent.addContextMenu(menu);
	    },
	    removeContextMenu: function removeContextMenu() {
	      this.parent.removeContextMenu(this.menu);
	    },
	    reloadContextMenu: function reloadContextMenu() {
	      var _this2 = this;

	      this.parent && this.$nextTick(function () {
	        var $parent = _this2.$parent,
	            removeContextMenu = _this2.removeContextMenu,
	            addContextMenu = _this2.addContextMenu;

	        removeContextMenu();
	        addContextMenu($parent.BMap || $parent.$parent.BMap, $parent.map || $parent.overlay, $parent.map || $parent.$parentmap);
	      });
	    }
	  },
	  mounted: function mounted() {
	    var map = void 0;
	    var BMap = void 0;
	    var addContextMenu = this.addContextMenu,
	        $parent = this.$parent;

	    switch ($parent.$options._componentTag) {
	      case 'map-view':
	        map = $parent.map;
	        map ? addContextMenu() : $parent.$on('ready', function () {
	          return addContextMenu($parent.BMap, $parent.map, $parent.map);
	        });
	        break;
	      case 'map-overlay-marker':
	        map = $parent.$parent.map;
	        map ? addContextMenu() : $parent.$parent.$on('ready', function () {
	          return addContextMenu($parent.$parent.BMap, $parent.overlay, $parent.$parent.map);
	        });
	        break;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeContextMenu();
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5e0fa55d", module.exports)
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(41)

	/* template */
	var __vue_template__ = __webpack_require__(42)
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
	__vue_options__.__file = "E:\\Github\\vue-baidu-map\\src\\context-menu\\item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6f87ddde", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6f87ddde", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] item.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//

	exports.default = {
	  name: 'map-context-menu-item',
	  props: {
	    callback: {
	      type: Function,
	      default: new Function()
	    },
	    text: {
	      type: String
	    },
	    iconUrl: {
	      type: String
	    },
	    id: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    seperator: {
	      type: Boolean
	    }
	  },
	  methods: {
	    reload: function reload() {
	      this.$parent.reloadContextMenu();
	    }
	  },
	  watch: {
	    text: function text() {
	      this.reload();
	    },
	    iconUrl: function iconUrl() {
	      this.reload();
	    },
	    id: function id() {
	      this.reload();
	    },
	    disabled: function disabled() {
	      this.reload();
	    },
	    iseperator: function iseperator() {
	      this.reload();
	    },
	    callback: function callback() {
	      this.reload();
	    }
	  },
	  destroyed: function destroyed() {
	    this.reload();
	  },
	  mounted: function mounted() {
	    this.reload();
	  }
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6f87ddde", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;