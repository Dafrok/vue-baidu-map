<script>
export default {
  name: 'map-control-copyright',
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
          ? new BMap.Bounds(new BMap.Point(item.bounds.sw.longitude, item.bounds.sw.latitude), new BMap.Point(item.bounds.ne.longitude, item.bounds.ne.latitude))
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
    this.$parent.$on('ready', () => {
      this.addControl()
    })
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>