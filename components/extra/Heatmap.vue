<script>
import commonMixin from '../base/mixins/common.js'
import Heatmap from 'bmaplib.heatmap'

export default {
  name: 'bml-heatmap',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    data: {
      type: Array,
      default: Array
    },
    max: {
      type: Number
    },
    radius: {
      type: Number
    },
    gradient: {
      type: Object
    },
    opacity: {
      type: Number
    }
  },
  watch: {
    data: {
      handler () {
        this.reload()
      },
      deep: true
    },
    max () {
      this.reload()
    },
    radius (val) {
      const {originInstance, opacity, gradient} = this
      originInstance.setOptions({
        radius: val,
        opacity,
        gradient
      })
    },
    gradient: {
      handler (val) {
        const {originInstance, radius, opacity} = this
        originInstance.setOptions({
          radius,
          opacity,
          gradient: val
        })
      },
      deep: true
    },
    opacity (val) {
      const {originInstance, radius, gradient} = this
      originInstance.setOptions({
        radius,
        opacity: val,
        gradient
      })
    }
  },
  methods: {
    load () {
      const {map, data, max, radius, opacity, gradient} = this
      const overlay = this.originInstance = new Heatmap({
        radius,
        opacity,
        gradient
      })
      map.addOverlay(overlay)
      overlay.setDataSet({data, max})
    }
  }
}
</script>
