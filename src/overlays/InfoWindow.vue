<template lang="pug">
div
  slot
</template>

<script>
import bindEvents from '../base/bindEvent.js'
import {createPoint, createSize} from '../base/factory.js'
export default {
  name: 'map-overlay-info-window',
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
      type: Boolean
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
      this.reloadOverlay()
    },
    'position.lat' (val, oldVal) {
      this.reloadOverlay()
    },
    'offset.width' (val, oldVal) {
      this.reloadOverlay()
    },
    'offset.height' (val) {
      this.reloadOverlay()
    },
    maxWidth () {
      this.reloadOverlay()
    },
    width (val) {
      this.overlay.setWidth(val)
    },
    height (val) {
      this.overlay.setHeight(val)
    },
    title (val) {
      this.overlay.setTitle(val)
    },
    maximize (val) {
      val ? this.overlay.enableMaximize() : this.overlay.disableMaximize()
    },
    autoPan (val) {
      val ? this.overlay.enableAutoPan() : this.overlay.disableAutoPan()
    },
    closeOnClick (val) {
      val ? this.overlay.enableCloseOnClick() : this.overlay.disableCloseOnClick()
    }
  },
  methods: {
    addOverlay () {
      const {show, position, title, width, height, maxWidth, offset, autoPan, closeOnClick, message, maximize, bindObserver} = this
      const {BMap, map} = this.$parent
      const $content = this.$el
      const overlay = new BMap.InfoWindow($content, {
        width : width,     // 信息窗口宽度
        height: height,     // 信息窗口高度
        title : title, // 信息窗口标题
        maxWidth: maxWidth,
        offset: createSize(BMap, offset),
        enableAutoPan: autoPan,
        enableCloseOnClick: closeOnClick,
        enableMessage: typeof message === 'undefined',//设置允许信息窗发送短息
        message: message
      })

      maximize ? overlay.enableMaximize() : overlay.disableMaximize()
      bindEvents.call(this, overlay)
      this.overlay = overlay
      overlay.redraw()
      ;[].forEach.call($content.querySelectorAll('img'), $img => $img.onload = () => overlay.redraw())
      bindObserver()
      this.$container = map // map or marker
      show && this.openInfoWindow()
    },
    bindObserver () {
      if (!MutationObserver) {
        return
      }
      const {$el, overlay} = this
      this.observer = new MutationObserver(mutations => overlay.redraw())
      this.observer.observe($el, {attributes: true, childList: true, characterData: true, subtree: true})
    },
    openInfoWindow () {
      const {$container, position, overlay} = this
      const {BMap, map} = this.$parent
      $container.openInfoWindow(overlay, createPoint(BMap, position))
    },
    closeInfoWindow () {
      this.$container.closeInfoWindow(this.overlay)
    },
    removeOverlay () {
      const {BMap, map} = this.$parent
      map.removeOverlay(this.overlay)
    },
    reloadOverlay () {
      this && this.$nextTick(() => {
        this.removeOverlay()
        this.addOverlay()
      })
    }
  },
  beforeDestroy () {
    this.observer && this.observer.disconnect();
  },
  mounted () {
    this.$parent.$on('ready', () => {
      this.addOverlay()
    })
  }
}
</script>