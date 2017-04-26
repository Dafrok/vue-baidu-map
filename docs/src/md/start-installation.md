# 安装

## NPM

```bash
$ npm install vue-baidu-map --save
```

<baidu-map :center="BDMap.center" :zoom="BDMap.zoom" class="bm-view">
    <bm-marker v-for="(point,index) in pointList" :position="point">
    </bm-marker>
    <bm-navigation></bm-navigation>
    <bm-geolocation :showAddressBar="true" :autoLocation="true"></bm-geolocation>
</baidu-map>
<button @click="handler">PUSH</button>

<script type="text/javascript">
export default {
  data() {
    return {
      BDMap: {
        center: {
          lng: 116.404,
          lat: 39.955
        },
        zoom: 12
      },
      pointList: [{
        lng: 116.414,
        lat: 39.915,
      }, {
        lng: 116.424,
        lat: 39.915,
      }]
    }
  },
  methods: {
    handler() {
      this.pointList.push({
        id: 1,
        lng: 116.524,
        lat: 39.955
      })
    }
  }
}
</script>

<style scoped>
.bm-view {
    width: 100%;
    height: 300px;
}
</style>