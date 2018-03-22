<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

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
        anchor: global[anchor],
        offset: offset && createSize(BMap, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
