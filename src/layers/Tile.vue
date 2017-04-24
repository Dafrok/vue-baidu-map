<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-tile',
  render (h) {
    return
  },
  mixins: [commonMixin],
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
      const layer = new BMap.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright,
        zIndex
      })
      this.layer = layer
      map.addTileLayer(layer)
    },
    unload () {
      const {BMap, map} = this
      map.removeTileLayer(this.layer)
    }
  }
}
</script>