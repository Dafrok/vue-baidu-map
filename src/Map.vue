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
    // map options
    options: {
      type: Object
    },
    // coordinate
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    },
    zoom: {
      type: Number
    },
    // behavior switch
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
  data () {
    return {
      point: {
        x: this.longitude,
        y: this.latitude,
        z: this.zoom
      }
    }
  },
  watch: {
    longitude (val) {
      this.point.x = val
    },
    latitude (val) {
      this.point.x = val
    },
    zoom (val) {
      this.point.x = val
    }
  },
  methods: {
    getMapScript () {
      if (!global.BMap) {
        return new Promise((resolve, reject) => {
          const $script = document.createElement('script')
          $script.onload = () => {
            resolve()
            global.document.body.removeChild($script)
          }
          global.document.body.appendChild($script)
          $script.src = `http://api.map.baidu.com/getscript?v=2.0&ak=${this.ak}`
        })

      }
      return Promise.resolve()
    },
    initMap () {
      this.map = new BMap.Map(this.$el, this.options)
      const {point, map} = this
      map.centerAndZoom(new BMap.Point(point.x, point.y), point.z || 1)
    }
  },
  mounted () {
    const {getMapScript, initMap} = this
    getMapScript().then(initMap)
  }
}
</script>