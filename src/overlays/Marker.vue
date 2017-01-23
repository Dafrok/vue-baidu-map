<script>
const events = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mouseout',
  'mouseover',
  'remove',
  'infowindowclose',
  'infowindowopen',
  'dragstart',
  'dragging',
  'dragend',
  'rightclick'
]

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
    animation: {
      type: String
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
    animation (val) {
      this.setAnimation(global[val])
    }
  },
  mounted () {
    const {BMap, map} = this.$parent
    this.$parent.$on('ready', () => {
      this.addOverlay()
    })
  },
  methods: {
    bindEvents () {
      const {overlay} = this
      events.forEach(event => {
        overlay.addEventListener(event, (arg) => {
          this.$emit(event, arg)
        })
      })
    },
    addOverlay () {
      const {point, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, title, animation, bindEvents} = this
      const {BMap, map} = this.$parent
      const label = new Label({})
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
      overlay.setAnimation(global[animation])
      bindEvents()
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
  }
}
</script>