<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

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
        offset: offset && createSize(BMap, offset),
        type: global[type],
        mapTypes
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
