<template lang="pug">
div
  slot
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    // baidu app key
    ak: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default () {
        return {
          longitude: 0,
          latitude: 0
        }
      }
    },
    // position
    position: {
      type: Object,
      default () {
        return {
          longitude: 0,
          latitude: 0
        }
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
    'value.latitude' (val) {
      const {map, value} = this
      map.setCenter(new this.BMap.Point(+value.longitude, +val))
    },
    'value.longitude' (val) {
      const {map, value} = this
      map.setCenter(new this.BMap.Point(+val, +value.latitude))
    },
    'value.zoom' (val) {
      const {map} = this
      map.setZoom(+val)
    }
  },
  methods: {
    getMapScript () {
      if (!global.BMap) {
        return new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `//api.map.baidu.com/api?v=2.0&ak=${this.ak}&callback=_initBaiduMap`;
        })
      }
      return Promise.resolve()
    },
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
    updateModel () {
      const point = this.map.getCenter()
      const zoom = this.map.getZoom()
      this.$emit('input', {
        longitude: point.lng,
        latitude: point.lat,
        zoom: zoom
      })
    },
    bindEvents () {
      const {map, updateModel} = this
      map.addEventListener('moving', (e) => {
        updateModel()
      })
      map.addEventListener('moveend', (e) => {
        updateModel()
      })
      map.addEventListener('zoomstart', (e) => {
        updateModel()
      })
      map.addEventListener('zoomend', (e) => {
        updateModel()
      })
      /*map.addEventListener('touchstart', (e) => {
        updateModel()
      })
      map.addEventListener('touchmove', (e) => {
        updateModel()
      })
      map.addEventListener('touchend', (e) => {
        updateModel()
      })
      map.addEventListener('resize', (e) => {
        updateModel()
      })
      map.addEventListener('load', (e) => {
        updateModel()
      })
      map.addEventListener('dragstart', (e) => {
        updateModel()
      })
      map.addEventListener('dragging', (e) => {
        updateModel()
      })
      map.addEventListener('dragend', (e) => {
        updateModel()
      })
      */
    },
    initMap (BMap) {
      this.BMap = BMap
      this.map = new this.BMap.Map(this.$el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      const {map, value, setMapOptions, bindEvents, maxZoom} = this
      setMapOptions()
      bindEvents()
      this.$emit('ready', this.BMap, this.map)
      map.centerAndZoom(new this.BMap.Point(value.longitude, value.latitude), maxZoom || value.zoom || 3)
    }
  },
  mounted () {
    const {getMapScript, initMap} = this
    getMapScript().then(initMap)
  }
}
</script>