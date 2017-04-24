<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-copyright',
  render (h) {
    return
  },
  mixins: [commonMixin],
  props: ['anchor', 'offset', 'copyright'],
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    copyright () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map} = this
      this.control = new BMap.CopyrightControl({
        anchor: global[this.anchor],
        offset: this.offset
      })
      this.updateCopyrightList()
      map.addControl(this.control)
    },
    unload () {
      this.$nextTick(() => {
        const {BMap, map} = this
        map && map.removeControl(this.control)
      })
    },
    updateCopyrightList () {
      const {BMap, map} = this
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
    }
  }
}
</script>