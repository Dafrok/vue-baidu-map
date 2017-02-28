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
    },
    theme: {
      type: Array
    }
  },
  watch: {
    'center.lng' (val, oldVal) {
      const {$BMap} = this.$parent
      const  {map} = this
      const lng = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        map.setCenter(new $BMap.Point(lng, this.center.lat))
      }
    },
    'center.lat' (val, oldVal) {
      const {$BMap} = this.$parent
      const  {map} = this
      const lat = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        map.setCenter(new $BMap.Point(this.center.lng, lat))
      }
    },
    zoom (val, oldVal) {
      const {$BMap} = this.$parent
      const  {map} = this
      const zoom = parseFloat(val)
      if (val.toString() !== oldVal.toString() && zoom >= 3 && zoom <= 19) {
        map.setZoom(zoom)
      }
    },
    minZoom (val) {
      const  {map} = this
      map.setMinZoom(val)
    },
    maxZoom (val) {
      const  {map} = this
      map.setMaxZoom(val)
    },
    highResolution () {
      // Require remount component
    },
    mapClick () {
      // Require remount component
    },
    mapType (val) {
      const  {map} = this
      map.setMapType(global[val])
    },
    dragging (val) {
      const  {map} = this
      val ? map.enableDragging() : map.disableDragging()
    },
    scrollWheelZoom (val) {
      const  {map} = this
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
    },
    doubleClickZoom (val) {
      const  {map} = this
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
    },
    keyboard (val) {
      const  {map} = this
      val ? map.enableKeyboard() : map.disableKeyboard()
    },
    inertialDragging (val) {
      const  {map} = this
      val ? map.enableInertialDragging() : map.disableInertialDragging()
    },
    continuousZoom (val) {
      const  {map} = this
      val ? map.enableContinuousZoom() : map.disableContinuousZoom()
    },
    pinchToZoom (val) {
      const  {map} = this
      val ? map.enablePinchToZoom() : map.disablePinchToZoom()
    },
    autoResize (val) {
      const  {map} = this
      val ? map.enableAutoResize() : map.disableAutoResize()
    },
    theme (val) {
      map.setMapStyle({styleJson: val});
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
      const map = new BMap.Map(this.$el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      this.map = map
      const {setMapOptions, maxZoom, zoom, center, getCenterPoint, theme} = this
      map.setMapStyle({styleJson: theme});
      setMapOptions()
      bindEvents.call(this, map)
      map.centerAndZoom(getCenterPoint(center), maxZoom || zoom || 3)
      this.BMap = BMap
      this.$emit('ready', {BMap, map})
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