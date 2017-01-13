<template lang="pug">
div
  label
    span 经度：
    input(v-model="position.longitude")
  label
    span 纬度：
    input(v-model="position.latitude")
  label
    span 缩放级别：
    input(v-model="position.zoom")
  baidu-map.map(:scroll-wheel-zoom="true", :position="position", ak="C6bKwIcQvm2gPPUIPjpSQpVD", @change="syncPosition")
</template>

<script>
export default {
  data () {
    return {
      position: {
        longitude: 116.404,
        latitude: 39.915,
        zoom: 15
      }
    }
  },
  methods: {
    syncPosition (position) {
      this.position = position
    }
  }
}
</script>