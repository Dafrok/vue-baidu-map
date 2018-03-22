<script>
import CurveLine from 'bmaplib.curveline'
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

const eventList = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mouseout',
  'mouseover',
  'remove',
  'lineupdate'
]

export default {
  name: 'bml-curve-line',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    points: {
      type: Array,
      default: Array
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
        this.originInstance.disableEditing()
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
      this.originInstance.setStrokeOpacity(val)
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
      const {BMap, map, points, strokeColor, strokeWeight, strokeOpacity, strokeStyle, editing, massClear, clicking} = this
      const overlay = new CurveLine(points.map(item => createPoint(BMap, item)), {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      })
      editing ? overlay.enableEditing() : overlay.disableEditing()
      this.originInstance = overlay
      map.addOverlay(overlay)
      bindEvents.call(this, overlay, eventList)
    }
  }
}
</script>
