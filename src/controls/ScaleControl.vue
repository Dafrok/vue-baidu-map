<script>
export default {
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
      this.control = new BMap.ScaleControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
      map.addControl(this.control)
    },
    removeControl () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map.removeControl(this.control)
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