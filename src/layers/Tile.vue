<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-tile',
  render (h) {
    return
  },
  mixins: [commonMixin('layer')],
  props: {
    transparentPng: {
      type: Boolean
    },
    tileUrlTemplate: {
      type: String
    },
    copyright: {
    },
    zIndex: {
      type: Number
    }
  },
  watch: {
    transparentPng () {
      this.reload()
    },
    tileUrlTemplate () {
      this.reload()
    },
    copyright () {
      this.reload()
    },
    zIndex () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, transparentPng, tileUrlTemplate, copyright, zIndex} = this
      this.originInstance = new BMap.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright,
        zIndex
      })
      this.originInstance = 
      map.addTileLayer(this.originInstance)
    }
  }
}
</script>