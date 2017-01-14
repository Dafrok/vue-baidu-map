<template lang="pug">
.columns
  .column.is-3
    .box
      label.label 经度
      p.control
        input.input.is-small(v-model="position.longitude")
      label.label 纬度
      p.control
        input.input.is-small(v-model="position.latitude")
      label.label 缩放级别
      p.control
        input.input.is-small(v-model="position.zoom")
  .column.is-9
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