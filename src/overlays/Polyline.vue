<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'bm-polyline',
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
      const {points, strokeColor, strokeWeight, strokeOpacity, strokeStyle, editing, massClear, clicking} = this
      const {BMap, map} = this.$parent
      const overlay = new BMap.Polyline(points.map(item => createPoint(BMap, {lng: item.lng, lat: item.lat})), {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      })
      this.overlay = overlay
      map.addOverlay(overlay)
      bindEvents.call(this, overlay)
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