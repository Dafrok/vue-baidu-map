<script>
export default {
  name: 'bm-copyright',
  render (h) {
    return
  },
  props: ['anchor', 'offset', 'copyright'],
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    copyright () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
      this.control = new BMap.CopyrightControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
      this.updateCopyrightList()
      map.addControl(this.control)
    },
    removeControl () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map && map.removeControl(this.control)
      })
    },
    updateCopyrightList () {
      const {BMap, map} = this.$parent
      const {removeCopyright, getCopyrightCollection} = this.control
      const copyrightList = getCopyrightCollection()
      copyrightList && copyrightList.forEach(item => {
        this.control.removeCopyright(item.id)
      })
      this.copyright && this.copyright.forEach(item => {
        const bounds = item.bounds
          ? new BMap.Bounds(new BMap.Point(item.bounds.sw.lng, item.bounds.sw.lat), new BMap.Point(item.bounds.ne.lng, item.bounds.ne.lat))
          : map.getBounds()
        this.control.addCopyright({
          id: item.id,
          content: item.content,
          bounds
        })
        this.control.getCopyrightCollection()
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