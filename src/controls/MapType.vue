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
      const {BMap, map} = this
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => {
        mapTypes.push(global[item])
      })
      this.originInstance = new BMap.MapTypeControl({
        anchor: global[this.anchor],
        offset: this.offset,
        type: global[this.type],
        mapTypes: mapTypes
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
