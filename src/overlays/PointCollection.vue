<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'
import {createPoint} from '@/base/factory.js'

export default {
  render () {},
  name: 'bm-point-collection',
  mixins: [commonMixin('overlay')],
  props: {
    points: {
      type: Array,
      default () {
        return []
      }
    },
    shape: {
      type: String,
      default: 'BMAP_POINT_SHAPE_CIRCLE'
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: 'BMAP_POINT_SIZE_NORMAL'
    }
  },
  watch: {
  },
  methods: {
    load () {
      const {BMap, map, points, shape, color, size} = this
      const overlay = this.originInstance = new BMap.PointCollection(points.map(p => createPoint(BMap, p)), {
        shape: global[shape],
        color,
        size: global[size]
      })
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
