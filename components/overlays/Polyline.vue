<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'bm-polyline',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    path: {
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
    path: {
      handler (val, oldVal) {
        this.reload()
      },
      deep: true
    },
    strokeColor (val) {
      this.originInstance.setStrokeColor(val)
    },
    strokeOpacity (val) {
      this.originInstance.setStrokeOpacity(val)
    },
    strokeWeight (val) {
      this.originInstance.setStrokeWeight(val)
    },
    strokeStyle (val) {
      this.originInstance.setStrokeStyle(val)
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
      const {BMap, map, path, strokeColor, strokeWeight, strokeOpacity, strokeStyle, editing, massClear, clicking} = this
      const overlay = new BMap.Polyline(path.map(item => createPoint(BMap, {lng: item.lng, lat: item.lat})), {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      })
      this.originInstance = overlay
      map.addOverlay(overlay)
      bindEvents.call(this, overlay)
    }
  }
}
</script>
