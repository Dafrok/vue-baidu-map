<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-scale',
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
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map} = this
      this.control = new BMap.ScaleControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
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