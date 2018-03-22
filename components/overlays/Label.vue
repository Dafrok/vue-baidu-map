<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint, createSize} from '../base/factory.js'

export default {
  name: 'bm-label',
  render () {},
  mixins: [commonMixin('overlay')],
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
    zIndex: {
      type: Number,
      default: 0
    },
    massClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    content (val) {
      this.originInstance.setContent(val)
    },
    title (val) {
      this.originInstance.setTitle(val)
    },
    'offset.width' (val, oldVal) {
      const {BMap} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMap, {width: val, height: this.offset.height}))
      }
    },
    'offset.height' (val, oldVal) {
      const {BMap} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMap, {
          width: this.offset.width,
          height: val
        }))
      }
    },
    'position.lng' (val, oldVal) {
      const {BMap} = this
      const lng = val
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.originInstance.setCenter(createPoint(BMap, {lng, lat: this.center.lat}))
      }
    },
    'position.lat' (val, oldVal) {
      const {BMap} = this
      const lat = val
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.originInstance.setCenter(createPoint(BMap, {lng: this.center.lng, lat}))
      }
    },
    labelStyle: {
      handler (val) {
        this.originInstance.setStyle(val)
      },
      deep: true
    },
    zIndex (val) {
      this.originInstance.setZIndex(val)
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    }
  },
  methods: {
    load () {
      const {BMap, map, content, title, offset, position, labelStyle, zIndex, massClear, $parent} = this
      const overlay = new BMap.Label(content, {
        offset: createSize(BMap, offset),
        position: createPoint(BMap, position),
        enableMassClear: massClear
      })
      this.originInstance = overlay
      try {
        $parent.originInstance.setLabel(overlay)
      } catch (e) {
        map.addOverlay(overlay)
      }
      title && overlay.setTitle(title)
      labelStyle && overlay.setStyle(labelStyle)
      zIndex && overlay.setZIndex(zIndex)
      bindEvents.call(this, overlay)
    }
  }
}
</script>
