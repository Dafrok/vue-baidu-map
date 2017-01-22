<script>
export default {
  name: 'map-control-city-list',
  render (h) {
    return
  },
  props: {
    anchor: {
      type: String,
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
      this.control = new BMap.CityListControl({
        anchor: global[this.anchor],
        offset: this.offset,
        onChangeBefore () {
          this.$emit('changeBefore')
        },
        onChangeAfter () {
          this.$emit('changeAfter')
        }
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