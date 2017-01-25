<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'map-overlay-polyline',
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
    strokeStype: {
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
      this.overlay.getStrokeColor(val)
    },
    strokeColor (val) {
      this.overlay.getStrokeOpacity(val)
    },
    strokeWeight (val) {
      this.overlay.getStrokeOpacity(val)
    },
    editing (val) {
      val ? this.overlay.enableEditing() : this.overlay.disableEditing()
    },
    massClear (val) {
      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear()
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
      console.log(points)
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
    const {BMap, map} = this.$parent
    this.$parent.$on('ready', () => {
      this.addOverlay()
    })
  }
}
</script>