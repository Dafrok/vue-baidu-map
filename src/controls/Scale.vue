<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-scale',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
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
      this.originInstance = new BMap.ScaleControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
