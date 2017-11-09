<template lang="pug">
bm-overlay(ref="customOverlay"
  :class="{sample: true, active}"
  pane="labelPane"
  @draw="draw")
  div(@click="handleClick" v-text="text")
</template>

<script>
export default {
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  props: ['text', 'position', 'active'],
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>
