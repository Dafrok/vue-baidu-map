<template lang="pug">
.columns
  .column.is-3
    .box
      label.label 经度
      p.control
        input.input.is-small(v-model.number="center.longitude")
      label.label 纬度
      p.control
        input.input.is-small(v-model.number="center.latitude")
      label.label 缩放级别
      p.control
        input.input.is-small(v-model.number="zoom", type="number")
  .column.is-9
    baidu-map
      map-view.map(:scroll-wheel-zoom="true", :center="center", :zoom="zoom", @moving="syncCenter", @moveend="syncCenter", @zoomend="syncZoom")
</template>

<script>
export default {
  data () {
    return {
      center: {
        longitude: 116.404,
        latitude: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenter (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.longitude = lng
      this.center.latitude = lat
    },
    syncZoom (e) {
      this.zoom = e.target.getZoom()
    }
  }
}
</script>