<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'
import {createPoint} from '@/base/factory.js'

export default {
  name: 'bm-polygon',
  render (h) {
    return
  },
  mixins: [commonMixin],
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
    path: {
      handler (val, oldVal) {
        this.reload()
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
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, path, strokeColor, strokeWeight, strokeOpacity, strokeStyle, fillColor, fillOpacity, editing, massClear, clicking} = this
      const overlay = new BMap.Polygon(path.map(item => createPoint(BMap, {lng: item.lng, lat: item.lat})), {
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
    unload () {
      const {BMap, map} = this
      map.removeOverlay(this.overlay)
    }
  }
}
</script>