<script>
/*eslint-disable*/
import commonMixin from '../base/mixins/common.js'
import {createIcon} from '../base/factory.js'
import Lushu from 'bmaplib.lushu'

export default {
  name: 'bm-lushu',
  render (h) {},
  mixins: [commonMixin('lushu')],
  props: {
    path: {
      type: Array,
      default: []
    },
    landmarkPois: {
      type: Array,
      default () {
        return []
      }
    },
    icon: {
      type: Object
    },
    speed: {
      type: Number,
      default: 4000
    },
    content: {
      type: String,
      default: ''
    },
    autoView: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: Boolean,
      default: false
    },
    infoWindow: {
      type: Boolean,
      default: true
    },
    play: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    path: {
      handler (val) {
        this.reload()
      },
      deep: true
    },
    landmarkPois: {
      handler (val) {
        this.reload()
      },
      deep: true
    },
    icon: {
      handler (val) {
        const {originInstance, content} = this
        const newMarker = createIcon(BMap, val)
        originInstance._opts.icon = newMarker
        originInstance._marker = newMarker
      },
      deep: true
    },
    speed (val) {
      const {originInstance, content} = this
      originInstance._opts.speed = val
    },
    content (val) {
      const {originInstance, infoWindow} = this
      val && infoWindow ? originInstance.showInfoWindow() : originInstance.hideInfoWindow()
      originInstance._opts.defaultContent = val
      originInstance._overlay && originInstance._overlay.setHtml(val)
    },
    autoView (val) {
      const {originInstance, content} = this
      originInstance._opts.autoView = val
    },
    rotation (val) {
      const {originInstance, content} = this
      originInstance._opts.enableRotation = val
    },
    infoWindow (val) {
      const {originInstance, content} = this
      originInstance && val && content ? originInstance.showInfoWindow() : originInstance.hideInfoWindow()
    },
    play (val) {
      const {originInstance} = this
      val && originInstance ? originInstance.start() : !this._isEnd && originInstance.pause()
    }
  },
  methods: {
    load () {
      const {BMap, map, path, landmarkPois, icon, speed, content, autoView, rotation, infoWindow, play} = this
      const lushu = this.originInstance = new Lushu(map, path, {
        enableRotation: rotation,
        landmarkPois,
        showInfoWindow: infoWindow,
        defaultContent: content,
        icon: icon && createIcon(BMap, icon),
        speed,
        autoView,
        onstart: e => {
          this._isEnd = false
          this.$emit('start')
        },
        onstop: e => {
          this._isEnd = true
          this.$emit('stop')
        },
        onpause: e => this.$emit('pause')
      })
      play && path.length && lushu.start(this)
      path.length && (content && infoWindow ? lushu.showInfoWindow() : lushu.hideInfoWindow())
    }
  }
}
</script>
