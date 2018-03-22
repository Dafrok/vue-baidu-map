<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bm-city-list',
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
      const self = this
      this.originInstance = new BMap.CityListControl({
        anchor: global[anchor],
        offset: offset && createSize(BMap, offset),
        onChangeBefore () {
          self.$emit('changeBefore')
        },
        onChangeAfter () {
          self.$emit('changeAfter')
        }
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
