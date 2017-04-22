<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'bm-tile',
  render (h) {
    return
  },
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
      this.reloadLayer()
    },
    tileUrlTemplate () {
      this.reloadLayer()
    },
    copyright () {
      this.reloadLayer()
    },
    zIndex () {
      this.reloadLayer()
    }
  },
  methods: {
    addLayer () {
      const {transparentPng, tileUrlTemplate, copyright, zIndex} = this
      const {BMap, map} = this.$parent
      const layer = new BMap.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright,
        zIndex
      })
      this.layer = layer
      map.addTileLayer(layer)
    },
    removeLayer () {
      const {BMap, map} = this.$parent
      map.removeTileLayer(this.layer)
    },
    reloadLayer () {
      this && this.$nextTick(() => {
        this.removeOverlay()
        this.addOverlay()
      })
    }
  },
  mounted () {
    const {map} = this.$parent
    const {addLayer} = this
    map ? addLayer() : this.$parent.$on('ready', addLayer)
  }
}
</script>