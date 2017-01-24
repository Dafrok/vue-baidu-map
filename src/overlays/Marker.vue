<script>
import bindEvents from '../base/bindEvent.js'
import {createLabel} from '../base/factory.js'

export default {
  name: 'map-overlay-marker',
  render (h) {
    return
  },
  props: {
    point: {},
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
    point () {},
    offset () {},
    icon () {},
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
    const {BMap, map} = this.$parent
    this.$parent.$on('ready', () => {
      this.addOverlay()
    })
  },
  methods: {
    addOverlay () {
      const {point, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, title, label, animation, top, addLabel} = this
      const {BMap, map} = this.$parent
      const overlay = new BMap.Marker(new BMap.Point(point.lng, point.lat), {
        offset,
        icon,
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