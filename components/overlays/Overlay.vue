<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bm-overlay',
  mixins: [commonMixin('overlay')],
  props: {
    pane: {
      type: String
    }
  },
  watch: {
    pane () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, $el, pane} = this
      const $emit = this.$emit.bind(this)
      class CustomOverlay extends BMap.Overlay {
        initialize () {
          $emit('initialize', {
            BMap,
            map,
            el: $el,
            overlay: this
          })
          try {
            map.getPanes()[pane].appendChild($el)
          } catch (e) {}
          return $el
        }
        draw () {
          $emit('draw', {
            BMap,
            map,
            el: $el,
            overlay: this
          })
        }
      }
      const overlay = new CustomOverlay()
      this.originInstance = overlay
      map.addOverlay(overlay)
    }
  }
}
</script>
