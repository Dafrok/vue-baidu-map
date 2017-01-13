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
  mounted () {
    this.$parent.$on('ready', (BMap, map) => {
      console.log(global[this.anchor], this.anchor, this)
      this.control = new BMap.ScaleControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
      map.addControl(this.control)
    })
  },
  beforeMount () {
    this.$nextTick(() => {
      const {BMap, map} = this.$parent
      BMap.removeControl(this.control)
    })
  }
}
</script>