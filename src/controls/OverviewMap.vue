<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'

export default {
  name: 'bm-overview-map',
  render (h) {
    return
  },
  mixins: [commonMixin],
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
      this.reload()
    },
    offset () {
      this.reload()
    },
    size () {
      this.reload()
    },
    isOpen () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map} = this
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
    unload () {
      this.$nextTick(() => {
        const {BMap, map} = this
        map && map.removeControl(this.control)
      })
    }
  }
}
</script>