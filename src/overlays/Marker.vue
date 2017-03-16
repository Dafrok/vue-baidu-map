<script>
import bindEvents from '../base/bindEvent.js'
import {createLabel, createIcon} from '../base/factory.js'

export default {
  name: 'bm-marker',
  render (h) {
    return
  },
  props: {
    position: {},
    label: {},
    offset: {},
    icon: {},
    massClear: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
    },
    title: {
      type: String
    },
    label: {
    },
    animation: {
      type: String
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'position.lng' (val, oldVal) {
      const {BMap, overlay} = this
      const lng = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        overlay.setPosition(new BMap.Point(lng, this.position.lat))
      }
    },
    'position.lat' (val, oldVal) {
      const {BMap, overlay} = this
      const lat = parseFloat(val)
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        overlay.setPosition(new BMap.Point(this.position.lng, lat))
      }
    },
    'offset.width' (val, oldVal) {
      const {BMap, overlay} = this
      const width = parseFloat(val)
      if (val.toString() !== oldVal.toString()) {
        overlay.setOffset(new BMap.Size(width, this.offset.height))
      }
    },
    'offset.height' (val, oldVal) {
      const {BMap, overlay} = this
      const height = parseFloat(val)
      if (val.toString() !== oldVal.toString()) {
        overlay.setOffset(new BMap.Size(this.offset.width, height))
      }
    },
    icon: {
      deep: true,
      handler (val) {
        const {BMap} = this.$parent
        this.overlay.setIcon(createIcon(BMap, val))
      }
    },
    massClear (val) {
      val ? this.overlay.enableMassClear() : this.overlay.disableMassClear()
    },
    dragging (val) {
      val ? this.overlay.enableDragging() : this.overlay.disableDragging()
    },
    clicking () {
      this.reloadOverlay()
    },
    raiseOnDrag () {
      this.reloadOverlay()
    },
    draggingCursor (val) {
      this.setDraggingCursor(val)
    },
    rotation (val) {
      this.setRotation(val)
    },
    shadow (val) {
      this.setShadow(val)
    },
    shadow (val) {
      this.setTitle(val)
    },
    label (val) {
      this.reloadOverlay()
    },
    animation (val) {
      this.setAnimation(global[val])
    },
    top (val) {
      this.overlay.setTop(val)
    }
  },
  mounted () {
    const {map} = this.$parent
    const {addOverlay} = this
    map ? addOverlay() : this.$parent.$on('ready', addOverlay)
  },
  methods: {
    addOverlay () {
      console.log(position)
      const {position, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, title, label, animation, top, addLabel} = this
      const {BMap, map} = this.$parent
      const overlay = new BMap.Marker(new BMap.Point(position.lng, position.lat), {
        offset,
        icon: icon && createIcon(BMap, icon),
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag,
        draggingCursor,
        rotation,
        shadow,
        title
      })
      this.overlay = overlay
      label && overlay && overlay.setLabel(createLabel(BMap, label))
      overlay.setTop(top)
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
      overlay.setAnimation(global[animation])
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
  }
}
</script>