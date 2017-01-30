<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'map-overlay-circle',
  render (h) {
    return
  },
  props: {
    center: {
    },
    radius: {
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
  watch: {
    'center.lng' (val, oldVal) {
      const {BMap} = this.$parent
      const lng = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.overlay.disableEditing()
        this.overlay.setCenter(createPoint(BMap, {lng: lng, lat: this.center.lat}))
        this.overlay.enableEditing()
      }
    },
    'center.lat' (val, oldVal) {
      this.overlay.disableEditing()
      const {BMap} = this.$parent
      const lat = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.overlay.disableEditing()
        this.overlay.setCenter(createPoint(BMap, {lng: this.center.lng, lat: lat}))
        this.overlay.enableEditing()
      }
      this.overlay.enableEditing()
    },
    radius (val, oldVal) {
      if (val.toString() !== oldVal.toString()) {
        this.overlay.disableEditing()
        this.overlay.setRadius(val)
        this.overlay.enableEditing()
      }
    },
    strokeColor (val) {
      this.overlay.setStrokeColor(val)
    },
    strokeColor (val) {
      this.overlay.setStrokeOpacity(val)
    },
    strokeWeight (val) {
      this.overlay.setStrokeOpacity(val)
    },
    fillColor (val) {
      this.overlay.setFillColor(val)
    },
    fillOpacity (val) {
      this.overlay.setFillOpacity(val)
    },
    editing (val) {
      val ? this.overlay.enableEditing() : this.overlay.disableEditing()
    },
    massClear (val) {
      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear()
    },
    clicking (val) {
      this.reloadOverlay()
    }
  },
  methods: {
    addOverlay () {
      const {center, radius, strokeColor, strokeWeight, strokeOpacity, strokeStyle, fillColor, fillOpacity, editing, massClear, clicking} = this
      const {BMap, map} = this.$parent
      const overlay = new BMap.Circle(createPoint(BMap, {lng: center.lng, lat: center.lat}), radius, {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        fillColor,
        fillOpacity,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      })
      this.overlay = overlay
      map.addOverlay(overlay)
      global._map = this.map
      global._overlay = this.overlay
      bindEvents.call(this, overlay)
      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
      editing ? overlay.enableEditing() : overlay.disableEditing()
    },
    removeOverlay () {
      const {BMap, map} = this.$parent
      map.removeOverlay(this.overlay)
    },
    reloadOverlay () {
      this && this.$nextTick(() => {
        this.removeOverlay()
        this.addOverlay()
      })
    }
  },
  mounted () {
    this.$parent.$on('ready', () => {
      this.addOverlay()
    })
  }
}
</script>