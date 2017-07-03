<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-map-type',
  render () {},
  mixins: [commonMixin('control')],
  props: ['type', 'mapTypes', 'anchor', 'offset'],
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    type () {
      this.reload()
    },
    mapTypes () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, anchor, offset, type} = this
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => mapTypes.push(global[item]))
      this.originInstance = new BMap.MapTypeControl({
        anchor: global[anchor],
        offset,
        type: global[type],
        mapTypes
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
