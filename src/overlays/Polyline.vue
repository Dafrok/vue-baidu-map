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
    points (val, oldVal) {
      // this.reloadOverlay()
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
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
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