<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'
import {createPoint, createSize} from '@/base/factory.js'

export default {
  name: 'bm-label',
  render (h) {
    return
  },
  mixins: [commonMixin],
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    offset: {},
    position: {},
    labelStyle: {},
    zIndex: {},
    massClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    content (val) {
      this.overlay.setContent(val)
    },
    title (val) {
      this.overlay.setTitle(val)
    },
    'offset.width' (val, oldVal) {
      const {BMap} = this
      if (val.toString() !== oldVal.toString()) {
        this.overlay.setOffset(createSize(BMap, {width: val, height: this.offset.height}))
      }

    },
    'offset.height' (val) {
      const {BMap} = this
      if (val.toString() !== oldVal.toString()) {
        this.overlay.setOffset(createSize(BMap, {width: this.offset.width, height: val}))
      }
    },
    'position.lng' (val, oldVal) {
      const {BMap} = this
      const lng = val
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.overlay.setCenter(createPoint(BMap, {lng, lat: this.center.lat}))
      }
    },
    'position.lat' (val, oldVal) {
      const {BMap} = this
      const lat = val
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.overlay.setCenter(createPoint(BMap, {lng: this.center.lng, lat}))
      }
    },
    labelStyle: {
      handler (val) {
        this.overlay.setStyle(val)
      },
      deep: true
    },
    zIndex (val) {
      this.overlay.setZIndex(val)
    },
    massClear (val) {
      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear()
    }
  },
  methods: {
    load () {
      const {BMap, map, content, title, offset, position, labelStyle, zIndex, massClear} = this
      const overlay = new BMap.Label(content, {
        offset: createSize(BMap, offset),
        position: createPoint(BMap, position),
        enableMassClear: massClear
      })
      this.overlay = overlay
      map.addOverlay(overlay)
      title && overlay.setTitle(title)
      labelStyle && overlay.setStyle(labelStyle)
      zIndex && overlay.setZIndex(zIndex)
      bindEvents.call(this, overlay)
    },
    unload () {
      const {BMap, map} = this
      map.removeOverlay(this.overlay)
    }
  }
}
</script>