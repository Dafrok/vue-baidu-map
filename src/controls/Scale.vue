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
      const {BMap, map, anchor, offset} = this
      this.originInstance = new BMap.ScaleControl({
        anchor: global[anchor],
        offset
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
