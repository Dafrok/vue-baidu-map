<script>
const events = [
  'locationSuccess',
  'locationError'
]

export default {
  name: 'map-control-geolocation',
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
    enableAutoLocation: {
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
    enableAutoLocation () {
      this.reloadControl()
    },
    locationIcon () {
      this.reloadControl()
    }
  },
  methods: {
    bindEvents () {
      const {control} = this
      events.forEach(event => {
        control.addEventListener(event, (arg) => {
          this.$emit(event, arg)
        })
      })
    },
    addControl () {
      const {BMap, map} = this.$parent
      this.control = new BMap.GeolocationControl({
        anchor: global[this.anchor],
        showAddressBar: this.showAddressBar,
        enableAutoLocation: this.enableAutoLocation,
        locationIcon: this.locationIcon
      })
      this.bindEvents()
      map.addControl(this.control)
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
    this.$parent.$on('ready', () => {
      this.addControl()
    })
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>