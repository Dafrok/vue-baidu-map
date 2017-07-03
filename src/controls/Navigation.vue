<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-navigation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    type: {
      type: Object
    },
    showZoomInfo: {
      type: Boolean
    },
    enableGeolocation: {
      type: Boolean,
      default: false
    }
  },
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
    showZoomInfo () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, anchor, offset, type, showZoomInfo, enableGeolocation} = this
      this.originInstance = new BMap.NavigationControl({
        anchor: global[anchor],
        offset,
        type,
        showZoomInfo,
        enableGeolocation
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
