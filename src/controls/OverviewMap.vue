<script>
const events = [
  'viewchanged',
  'viewchanging'
]

export default {
  name: 'map-control-overview-map',
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
    size: {
      type: Object
    },
    isOpen: {
      type: Boolean
    }
  },
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    size () {
      this.reloadControl()
    },
    isOpen () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => {
        mapTypes.push(global[item])
      })
      this.control = new BMap.OverviewMapControl({
        anchor: global[this.anchor],
        offset: this.offset,
        size: this.size,
        isOpen: this.isOpen
      })
      this.bindEvents()
      map.addControl(this.control)
    },
    bindEvents () {
      const {control} = this
      events.forEach(event => {
        control.addEventListener(event, (arg) => {
          this.$emit(event, arg)
        })
      })
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