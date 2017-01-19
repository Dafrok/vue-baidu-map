<template lang="pug">
div
  slot
</template>

<script>
export default {
  name: 'baidu-map',
  methods: {
    initMap (BMap) {
      this.$BMap = BMap
      this.$emit('ready', BMap)
    },
    getMapScript () {
      const ak = this._BMap().ak
      if (!global.BMap) {
        return new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `//api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`;
        })
      }
      return Promise.resolve(global.BMap)
    }
  },
  created () {
    const {getMapScript, initMap} = this
    getMapScript().then(initMap)
  }
}
</script>