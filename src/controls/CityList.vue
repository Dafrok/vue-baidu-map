<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-city-list',
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
      const {BMap, map, _instance} = this
      this.control = new BMap.CityListControl({
        anchor: global[this.anchor],
        offset: this.offset,
        onChangeBefore () {
          _instance.$emit('changeBefore')
        },
        onChangeAfter () {
          _instance.$emit('changeAfter')
        }
      })
      map.addControl(this.control)
    },
    unload () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map && map.removeControl(this.control)
      })
    }
  }
}
</script>