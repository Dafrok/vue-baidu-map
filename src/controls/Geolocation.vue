<script>
import bindEvents from '../base/bindEvent.js'

export default {
  name: 'bm-geolocation',
  render (h) {
    return
  },
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
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    showAddressBar () {
      this.reloadControl()
    },
    autoLocation () {
      this.reloadControl()
    },
    locationIcon () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
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
    removeControl () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map && map.removeControl(this.control)
      })
    },
    reloadControl () {
      this.$nextTick(() => {
        this.removeControl()
        this.addControl()
      })
    }
  },
  mounted () {
    const {map} = this.$parent
    const {addControl} = this
    map ? addControl() : this.$parent.$on('ready', addControl)
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>