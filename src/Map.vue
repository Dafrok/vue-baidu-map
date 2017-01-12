<template lang="pug">
div
  slot
</template>

<script>
export default {
  props: {
    // baidu app key
    ak: {
      type: String,
      default: ''
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
    'position.latitude' (val) {
      const {map, position} = this
      map.setCenter(new BMap.Point(+position.longitude, +val))
    },
    'position.longitude' (val) {
      const {map, position} = this
      map.setCenter(new BMap.Point(+val, +position.latitude))
    },
    'position.zoom' (val) {
      const {map, position} = this
      map.setZoom(+val)
    }
  },
  methods: {
    getMapScript () {
      if (!global.BMap) {
        return new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            resolve()
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
    updatePosition () {
      const point = this.map.getCenter()
      const zoom = this.map.getZoom()
      this.$emit('change', {
        longitude: point.lng,
        latitude: point.lat,
        zoom: zoom
      })
    },
    bindEvents () {
      const {map, updatePosition} = this
      map.addEventListener('moving', (e) => {
        updatePosition()
      })
      map.addEventListener('moveend', (e) => {
        updatePosition()
      })

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
    initMap () {
      this.map = new BMap.Map(this.$el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      const {map, position, setMapOptions, bindEvents, maxZoom} = this
      setMapOptions()
      bindEvents()
      map.centerAndZoom(new BMap.Point(position.longitude, position.latitude), maxZoom || position.zoom || 3)
    }
  },
  mounted () {
    const {getMapScript, initMap} = this
    getMapScript().then(initMap)
  }
}
</script>