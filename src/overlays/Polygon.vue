<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'map-overlay-polygon',
  render (h) {
    return
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
  watch: {
    points: {
      handler (val, oldVal) {
        this.reloadOverlay()
      },
      deep: true
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
      const {points, strokeColor, strokeWeight, strokeOpacity, strokeStyle, fillColor, fillOpacity, editing, massClear, clicking} = this
      const {BMap, map} = this.$parent
      const overlay = new BMap.Polygon(points.map(item => createPoint(BMap, {lng: item.lng, lat: item.lat})), {
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
      bindEvents.call(this, overlay)
      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
      editing ? overlay.enableEditing() : overlay.disableEditing()
    },
    removeOverlay () {
      const {BMap, map} = this.$parent
      map.removeOverlay(this.overlay)
    },
    reloadOverlay () {
      this.$nextTick(() => {
        this.removeOverlay()
        this.addOverlay()
      })
    }
  },
  mounted () {
    const {map} = this.$parent
    const {addOverlay} = this
    map ? addOverlay() : this.$parent.$on('ready', addOverlay)
  }
}
</script>