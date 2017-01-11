<template lang="pug">
baidu-map.map(ak="C6bKwIcQvm2gPPUIPjpSQpVD", :longitude="116.404", :latitude="39.915", :zoom="15")
</template>

<script>
import BaiduMap from '../../../src/index.vue'

export default {
  components: {
    BaiduMap
  }
}
</script>

<style>
html, body, .map {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>