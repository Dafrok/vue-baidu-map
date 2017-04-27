<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'

export default {
  name: 'bm-geolocation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
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
      this.originInstance = new BMap.GeolocationControl({
        anchor: global[this.anchor],
        showAddressBar: this.showAddressBar,
        enableAutoLocation: this.autoLocation,
        locationIcon: this.locationIcon
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
    }
  }
}
</script>
