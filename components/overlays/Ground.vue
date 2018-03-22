<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createBounds} from '../base/factory.js'

export default {
  name: 'bm-ground',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    bounds: {
      type: Object
    },
    opacity: {
      type: Number
    },
    imageURL: {
      type: String
    },
    displayOnMinLevel: {
      type: Number
    },
    displayOnMaxLevel: {
      type: Number
    }
  },
  watch: {
    bounds: {
      handler (val) {
        const {BMap} = this
        this.originInstance.setBounds(createBounds(BMap, val))
      },
      deep: true
    },
    opacity (val) {
      this.originInstance.setOpacity(val)
    },
    imageURL (val) {
      this.originInstance.setImageURL(val)
    },
    displayOnMinLevel (val) {
      this.originInstance.setDisplayOnMinLevel(val)
    },
    displayOnMaxLevel (val) {
      this.originInstance.setDisplayOnMaxLevel(val)
    }
  },
  methods: {
    load () {
      const {BMap, map, bounds, opacity, imageURL, displayOnMinLevel, displayOnMaxLevel} = this
      const overlay = new BMap.GroundOverlay(bounds && createBounds(BMap, bounds), {
        opacity,
        imageURL,
        displayOnMaxLevel,
        displayOnMinLevel
      })
      // option 中配置 https 协议地址无法加载
      overlay.setImageURL(imageURL)
      this.originInstance = overlay
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
