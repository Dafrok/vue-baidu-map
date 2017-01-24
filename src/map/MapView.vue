<template lang="pug">
div
  slot
</template>

<script>
import bindEvents from '../base/bindEvent.js'
export default {
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
    'center.lng' (val, oldVal) {
      const {$BMap, map} = this.$parent
      const lng = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        map.setCenter(new $BMap.Point(lng, this.center.lat))
      }
    },
    'center.lat' (val, oldVal) {
      const {$BMap, map} = this.$parent
      const lat = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        map.setCenter(new $BMap.Point(this.center.lng, lat))
      }
    },
    zoom (val, oldVal) {
      const {$BMap, map} = this.$parent
      const zoom = parseFloat(val)
      if (val.toString() !== oldVal.toString() && zoom >= 3 && zoom <= 19) {
        map.setZoom(zoom)
      }
    },
    minZoom (val) {
      map.setMinZoom(val)
    },
    maxZoom (val) {
      map.setMaxZoom(val)
    },
    highResolution () {
      // Require remount component
    },
    mapClick () {
      // Require remount component
    },
    mapType (val) {
      map.setMapType(global[val])
    },
    dragging (val) {
      val ? map.enableDragging() : map.disableDragging()
    },
    scrollWheelZoom (val) {
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
    },
    doubleClickZoom (val) {
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
    },
    keyboard (val) {
      val ? map.enableKeyboard() : map.disableKeyboard()
    },
    inertialDragging (val) {
      val ? map.enableInertialDragging() : map.disableInertialDragging()
    },
    continuousZoom (val) {
      val ? map.enableContinuousZoom() : map.disableContinuousZoom()
    },
    pinchToZoom (val) {
      val ? map.enablePinchToZoom() : map.disablePinchToZoom()
    },
    autoResize (val) {
      val ? map.enableAutoResize() : map.disableAutoResize()
    }
  },
  methods: {
    setMapOptions () {
      const {map} = this.$parent
      const {minZoom, maxZoom, mapType, dragging, scrollWheelZoom, doubleClickZoom, keyboard, inertialDragging, continuousZoom, pinchToZoom, autoResize} = this
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
      const map = this.$parent.map = new BMap.Map(this.$el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      const {setMapOptions, maxZoom, zoom, center, getCenterPoint} = this
      setMapOptions()
      bindEvents.call(this, map)
      map.centerAndZoom(getCenterPoint(center), maxZoom || zoom || 3)
      this.BMap = BMap
      this.map = map
      this.$emit('ready')
    },
    checkType (val) {
      return Object.prototype.toString.call(val).slice(8, -1)
    },
    getCenterPoint () {
      const {center, checkType} = this
      const {$BMap} = this.$parent
      switch (checkType(center)) {
        case 'String': return new $BMap.Point(center)
        case 'Object': return new $BMap.Point(parseFloat(center.lng), parseFloat(center.lat))
        default: return new $BMap.Point()
      }
    }
  },
  mounted () {
    this.$parent.$on('ready', BMap => {
      this.init(BMap)
    })
  }
}
</script>