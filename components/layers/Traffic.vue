<script>
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bm-triffic',
  render (h) {},
  mixins: [commonMixin('layer')],
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
      this.originInstance = new BMap.TrafficLayer({
        pridictDate
      })
      map.addTileLayer(this.originInstance)
    }
  }
}
</script>
