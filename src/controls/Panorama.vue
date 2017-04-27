<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-panorama',
  mixins: [commonMixin('control')],
  render () {},
  props: ['anchor', 'offset'],
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
      this.originInstance = new BMap.PanoramaControl({
        anchor,
        offset
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
