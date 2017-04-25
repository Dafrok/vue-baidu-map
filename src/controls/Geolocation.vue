<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'

export default {
  name: 'bm-geolocation',
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
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    },
    locationIcon: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    showAddressBar () {
      this.reload()
    },
    autoLocation () {
      this.reload()
    },
    locationIcon () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map} = this
      this.control = new BMap.GeolocationControl({
        anchor: global[this.anchor],
        showAddressBar: this.showAddressBar,
        enableAutoLocation: this.autoLocation,
        locationIcon: this.locationIcon
      })
      bindEvents.call(this, this.control)
      map.addControl(this.control)
      global.map = map
    },
    unload () {
      this.$nextTick(() => {
        const {BMap, map} = this
        map && map.removeControl(this.control)
      })
    }
  }
}
</script>