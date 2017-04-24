<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-triffic',
  render (h) {
    return
  },
  mixins: [commonMixin],
  props: {
    predictDate: {
      type: Object
    }
  },
  watch: {
    'pridictDate.weekday' () {
      this.reload()
    },
    'pridictDate.hour' () {
      this.reload()
    },
    pridictDate () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {pridictDate, BMap, map} = this
      const layer = new BMap.TrafficLayer({
        pridictDate
      })
      this.layer = layer
      map.addTileLayer(layer)
    },
    unload () {
      const {BMap, map} = this.$parent
      map.removeTileLayer(this.layer)
    }
  }
}
</script>