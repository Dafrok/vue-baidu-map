<script>
export default {
  name: 'map-control-map-type',
  render (h) {
    return
  },
  props: ['type', 'mapTypes', 'anchor', 'offset'],
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    type () {
      this.reloadControl()
    },
    mapTypes () {
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
      this.control = new BMap.MapTypeControl({
        anchor: global[this.anchor],
        offset: this.offset,
        type: global[this.type],
        mapTypes: mapTypes
      })
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