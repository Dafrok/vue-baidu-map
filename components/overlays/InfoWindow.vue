<template>
<div v-show="show">
  <slot></slot>
</div>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint, createSize} from '../base/factory.js'

export default {
  name: 'bm-info-window',
  mixins: [commonMixin('overlay')],
  props: {
    show: {
      type: Boolean
    },
    position: {
      type: Object
    },
    title: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    offset: {
      type: Object
    },
    maximize: {
      type: Boolean
    },
    autoPan: {
      type: Boolean
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    message: {
      type: String
    }
  },
  watch: {
    show (val) {
      val ? this.openInfoWindow() : this.closeInfoWindow()
    },
    'position.lng' (val, oldVal) {
      this.reload()
    },
    'position.lat' (val, oldVal) {
      this.reload()
    },
    'offset.width' (val, oldVal) {
      this.reload()
    },
    'offset.height' (val) {
      this.reload()
    },
    maxWidth () {
      this.reload()
    },
    width (val) {
      this.originInstance.setWidth(val)
    },
    height (val) {
      this.originInstance.setHeight(val)
    },
    title (val) {
      this.originInstance.setTitle(val)
    },
    maximize (val) {
      val ? this.originInstance.enableMaximize() : this.originInstance.disableMaximize()
    },
    autoPan (val) {
      val ? this.originInstance.enableAutoPan() : this.originInstance.disableAutoPan()
    },
    closeOnClick (val) {
      val ? this.originInstance.enableCloseOnClick() : this.originInstance.disableCloseOnClick()
    }
  },
  methods: {
    redraw () {
      this.originInstance.redraw()
    },
    load () {
      const {BMap, map, show, title, width, height, maxWidth, offset, autoPan, closeOnClick, message, maximize, bindObserver, $parent} = this
      const $content = this.$el
      const overlay = new BMap.InfoWindow($content, {
        width,
        height,
        title,
        maxWidth,
        offset: createSize(BMap, offset),
        enableAutoPan: autoPan,
        enableCloseOnClick: closeOnClick,
        enableMessage: typeof message === 'undefined',
        message
      })

      maximize ? overlay.enableMaximize() : overlay.disableMaximize()
      bindEvents.call(this, overlay)
      this.originInstance = overlay
      overlay.redraw()
      ;[].forEach.call($content.querySelectorAll('img'), $img => {
        $img.onload = () => overlay.redraw()
      })
      bindObserver()
      this.$container = $parent.originInstance && $parent.originInstance.openInfoWindow ? $parent.originInstance : map
      show && this.openInfoWindow()
    },
    bindObserver () {
      const MutationObserver = global.MutationObserver
      if (!MutationObserver) {
        return
      }
      const {$el, originInstance} = this
      this.observer = new MutationObserver(mutations => originInstance.redraw())
      this.observer.observe($el, {attributes: true, childList: true, characterData: true, subtree: true})
    },
    openInfoWindow () {
      const {BMap, $container, position, originInstance} = this
      $container.openInfoWindow(originInstance, createPoint(BMap, position))
    },
    closeInfoWindow () {
      this.$container.closeInfoWindow(this.originInstance)
    }
  }
}
</script>
