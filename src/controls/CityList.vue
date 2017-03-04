<script>
export default {
  name: 'bm-city-list',
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
      const _instance = this
      this.control = new BMap.CityListControl({
        anchor: global[this.anchor],
        offset: this.offset,
        onChangeBefore () {
          _instance.$emit('changeBefore')
        },
        onChangeAfter () {
          _instance.$emit('changeAfter')
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
    const {map} = this.$parent
    const {addControl} = this
    map ? addControl() : this.$parent.$on('ready', addControl)
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>