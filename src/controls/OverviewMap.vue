<script>
import bindEvents from '../base/bindEvent.js'

export default {
  name: 'bm-overview-map',
  render (h) {
    return
  },
  props: {
    anchor: {
      type: String,
    },
    offset: {
      type: Object
    },
    size: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    size () {
      this.reloadControl()
    },
    isOpen () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => {
        mapTypes.push(global[item])
      })
      this.control = new BMap.OverviewMapControl({
        anchor: global[this.anchor],
        offset: this.offset,
        size: this.size,
        isOpen: this.isOpen
      })
      bindEvents.call(this, this.control)
      map.addControl(this.control)
    },
    removeControl () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map && map.removeControl(this.control)
      })
    },
    reloadControl () {
      this.$nextTick(() => {
        this.removeControl()
        this.addControl()
      })
    }
  },
  mounted () {
    const {map} = this.$parent
    const {addControl} = this
    map ? addControl() : this.$parent.$on('ready', addControl)
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>