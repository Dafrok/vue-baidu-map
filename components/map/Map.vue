<template>
<div>
  <div v-if="!hasBmView" ref="view" style="width: 100%; height: 100%">
  </div>
  <slot></slot>
</div>
</template>

<script>
import bindEvents from '../base/bindEvent.js'
import {checkType} from '../base/util.js'

export default {
  name: 'bm-map',
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
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
      default: true
    },
    continuousZoom: {
      type: Boolean,
      default: true
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
    },
    mapStyle: {
      type: Object
    }
  },
  watch: {
    center (val, oldVal) {
      const {map, zoom} = this
      if (checkType(val) === 'String' && val !== oldVal) {
        map.centerAndZoom(val, zoom)
      }
    },
    'center.lng' (val, oldVal) {
      const {BMap, map, zoom, center} = this
      if (val !== oldVal && val >= -180 && val <= 180) {
        map.centerAndZoom(new BMap.Point(val, center.lat), zoom)
      }
    },
    'center.lat' (val, oldVal) {
      const {BMap, map, zoom, center} = this
      if (val !== oldVal && val >= -74 && val <= 74) {
        map.centerAndZoom(new BMap.Point(center.lng, val), zoom)
      }
    },
    zoom (val, oldVal) {
      const {map} = this
      if (val !== oldVal && val >= 3 && val <= 19) {
        map.setZoom(val)
      }
    },
    minZoom (val) {
      const {map} = this
      map.setMinZoom(val)
    },
    maxZoom (val) {
      const {map} = this
      map.setMaxZoom(val)
    },
    highResolution () {
      this.reset()
    },
    mapClick () {
      this.reset()
    },
    mapType (val) {
      const {map} = this
      map.setMapType(global[val])
    },
    dragging (val) {
      const {map} = this
      val ? map.enableDragging() : map.disableDragging()
    },
    scrollWheelZoom (val) {
      const {map} = this
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
    },
    doubleClickZoom (val) {
      const {map} = this
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
    },
    keyboard (val) {
      const {map} = this
      val ? map.enableKeyboard() : map.disableKeyboard()
    },
    inertialDragging (val) {
      const {map} = this
      val ? map.enableInertialDragging() : map.disableInertialDragging()
    },
    continuousZoom (val) {
      const {map} = this
      val ? map.enableContinuousZoom() : map.disableContinuousZoom()
    },
    pinchToZoom (val) {
      const {map} = this
      val ? map.enablePinchToZoom() : map.disablePinchToZoom()
    },
    autoResize (val) {
      const {map} = this
      val ? map.enableAutoResize() : map.disableAutoResize()
    },
    theme (val) {
      const {map} = this
      map.setMapStyle({styleJson: val})
    },
    'mapStyle.features': {
      handler (val, oldVal) {
        const {map, mapStyle} = this
        const {style, styleJson} = mapStyle
        map.setMapStyle({
          styleJson,
          features: val,
          style
        })
      },
      deep: true
    },
    'mapStyle.style' (val, oldVal) {
      const {map, mapStyle} = this
      const {features, styleJson} = mapStyle
      map.setMapStyle({
        styleJson,
        features,
        style: val
      })
    },
    'mapStyle.styleJson': {
      handler (val, oldVal) {
        const {map, mapStyle} = this
        const {features, style} = mapStyle
        map.setMapStyle({
          styleJson: val,
          features,
          style
        })
      },
      deep: true
    },
    mapStyle (val) {
      const {map, theme} = this
      !theme && map.setMapStyle(val)
    }
  },
  methods: {
    setMapOptions () {
      const {map, minZoom, maxZoom, mapType, dragging, scrollWheelZoom, doubleClickZoom, keyboard, inertialDragging, continuousZoom, pinchToZoom, autoResize} = this
      minZoom && map.setMinZoom(minZoom)
      maxZoom && map.setMaxZoom(maxZoom)
      mapType && map.setMapType(global[mapType])
      dragging ? map.enableDragging() : map.disableDragging()
      scrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
      doubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
      keyboard ? map.enableKeyboard() : map.disableKeyboard()
      inertialDragging ? map.enableInertialDragging() : map.disableInertialDragging()
      continuousZoom ? map.enableContinuousZoom() : map.disableContinuousZoom()
      pinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom()
      autoResize ? map.enableAutoResize() : map.disableAutoResize()
    },
    init (BMap) {
      if (this.map) {
        return
      }
      let $el = this.$refs.view
      for (let $node of this.$slots.default || []) {
        if ($node.componentOptions && $node.componentOptions.tag === 'bm-view') {
          this.hasBmView = true
          $el = $node.elm
        }
      }
      const map = new BMap.Map($el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      this.map = map
      const {setMapOptions, zoom, getCenterPoint, theme, mapStyle} = this
      theme ? map.setMapStyle({styleJson: theme}) : map.setMapStyle(mapStyle)
      setMapOptions()
      bindEvents.call(this, map)
      // 此处强行初始化一次地图 回避一个由于错误的 center 字符串导致初始化失败抛出的错误
      map.reset()
      map.centerAndZoom(getCenterPoint(), zoom)
      this.$emit('ready', {BMap, map})
      // Debug
      // global.map = map
      // global.mapComponent = this
    },
    getCenterPoint () {
      const {center, BMap} = this
      switch (checkType(center)) {
        case 'String': return center
        case 'Object': return new BMap.Point(center.lng, center.lat)
        default: return new BMap.Point()
      }
    },
    initMap (BMap) {
      this.BMap = BMap
      this.init(BMap)
    },
    getMapScript () {
      if (!global.BMap) {
        const ak = this.ak || this._BMap().ak
        global.BMap = {}
        global.BMap._preloader = new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global.BMap._preloader = null
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`
        })
        return global.BMap._preloader
      } else if (!global.BMap._preloader) {
        return Promise.resolve(global.BMap)
      } else {
        return global.BMap._preloader
      }
    },
    reset () {
      const {getMapScript, initMap} = this
      getMapScript()
        .then(initMap)
    }
  },
  mounted () {
    this.reset()
  },
  data () {
    return {
      hasBmView: false
    }
  }
}
</script>
