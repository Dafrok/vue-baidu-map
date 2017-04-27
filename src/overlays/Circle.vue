<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'
import {createPoint} from '@/base/factory.js'

export default {
  name: 'bm-circle',
  render () {},
  mixins: [commonMixin('overlay')],
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
      // this.originInstance.disableEditing()
      const {BMap} = this
      const lng = val
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.originInstance.setCenter(createPoint(BMap, {lng, lat: this.center.lat}))
      }
      // this.originInstance.enableEditing()
    },
    'center.lat' (val, oldVal) {
      // this.originInstance.disableEditing()
      const {BMap} = this
      const lat = val
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.originInstance.setCenter(createPoint(BMap, {lng: this.center.lng, lat}))
      }
      // this.originInstance.enableEditing()
    },
    radius (val, oldVal) {
      // this.originInstance.disableEditing()
      this.originInstance.setRadius(val)
      // this.originInstance.enableEditing()
    },
    strokeColor (val) {
      this.originInstance.setStrokeColor(val)
    },
    strokeOpacity (val) {
      this.originInstance.setStrokeOpacity(val)
    },
    strokeWeight (val) {
      this.originInstance.setStrokeOpacity(val)
    },
    fillColor (val) {
      this.originInstance.setFillColor(val)
    },
    fillOpacity (val) {
      this.originInstance.setFillOpacity(val)
    },
    editing (val) {
      val ? this.originInstance.enableEditing() : this.originInstance.disableEditing()
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    },
    clicking (val) {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, center, radius, strokeColor, strokeWeight, strokeOpacity, strokeStyle, fillColor, fillOpacity, editing, massClear, clicking} = this
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
      this.originInstance = overlay
      map.addOverlay(overlay)
      bindEvents.call(this, overlay)
      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
      editing ? overlay.enableEditing() : overlay.disableEditing()
    }
  }
}
</script>
