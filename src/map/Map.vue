<template lang="pug">
div
  div(v-if="!hasBmView", ref="view", style="width: 100%; height: 100%")
  slot
</template>

<script>
import bindEvents from '../base/bindEvent.js'
import {checkType} from '@/base/util.js'

export default {
  name: 'bm-view',
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
    }
  },
  watch: {
    center (val, oldVal) {
      const {map, BMap} = this
      if (checkType(val) === 'String' && val !== oldVal) {
        map.setCenter(val)
      } else if (checkType(oldVal) === 'String' && checkType(val) === 'Object') {
        map.setCenter(new BMap.Point(parseFloat(val.lng), parseFloat(val.lat)))
      }
    },
    'center.lng' (val, oldVal) {
      const {BMap, map} = this
      if (checkType(oldVal) === 'Undefined' || checkType(val) === 'Undefined') {
        return
      }
      const lng = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        map.setCenter(new BMap.Point(lng, this.center.lat))
      }
    },
    'center.lat' (val, oldVal) {
      const {BMap, map} = this
      if (checkType(oldVal) === 'Undefined' || checkType(val) === 'Undefined') {
        return
      }
      const lat = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        map.setCenter(new BMap.Point(this.center.lng, lat))
      }
    },
    zoom (val, oldVal) {
      const {map} = this
      const zoom = parseFloat(val)
      if (val.toString() !== oldVal.toString() && zoom >= 3 && zoom <= 19) {
        map.setZoom(zoom)
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
      // Require remount component
    },
    mapClick () {
      // Require remount component
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
      let $el = this.$refs.view
      for (let $node of this.$slots.default || []) {
        if ($node.componentOptions && $node.componentOptions.tag === 'bm-view') {
          this.hasBmView = true
          $el = $node.elm
        }
      }
      const map = new BMap.Map($el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      this.map = map
      const {setMapOptions, maxZoom, zoom, getCenterPoint, theme} = this
      theme && map.setMapStyle({styleJson: theme})
      setMapOptions()
      bindEvents.call(this, map)
      map.centerAndZoom(getCenterPoint(), maxZoom || zoom || 3)
      this.$emit('ready', {BMap, map})
    },
    getCenterPoint () {
      const {center, BMap} = this
      switch (checkType(center)) {
        case 'String': return center
        case 'Object': return new BMap.Point(parseFloat(center.lng), parseFloat(center.lat))
        default: return new BMap.Point()
      }
    },
    initMap (BMap) {
      this.BMap = BMap
      this.init(BMap)
    },
    getMapScript () {
      if (!global.BMap) {
        const ak = this._BMap().ak
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
          $script.src = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`
        })
        return global.BMap._preloader
      } else if (!global.BMap._preloader) {
        return Promise.resolve(global.BMap)
      } else {
        return global.BMap._preloader
      }
    }
  },
  created () {
    const {getMapScript, initMap} = this
    getMapScript()
      .then(initMap)
  },
  data () {
    return {
      hasBmView: false
    }
  }
}
</script>
