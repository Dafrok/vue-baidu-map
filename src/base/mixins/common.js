export default {
  methods: {
    ready () {
      const BMap = this.BMap = this.$parent.BMap
      const map = this.map = this.$parent.map
      this.load()
      this.$emit('ready', {
        BMap,
        map
      })
    },
    reload () {
      this && this.$nextTick(() => {
        this.unload()
        this.load()
      })
    }
  },
  mounted () {
    const {BMap, map} = this.$parent
    const {ready} = this
    map ? ready() : this.$parent.$on('ready', ready)
  },
  beforeDestroy () {
    this.unload()
  }
}