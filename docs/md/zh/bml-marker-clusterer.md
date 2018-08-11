# 点聚合

`BmlMarkerClusterer` 能够聚合它包含的所有 `BmMarker` 组件。

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|gridSize|Size||网格大小|
|maxZoom|Number||聚合的最大缩放级别|
|minClusterSize|Number||单个聚合的最小数量|
|styles|Array[{url, size, opt_anchor, textColor, opt_textSize}]|[]|聚合的样式风格集合|
|averageCenter|Boolean|false|单个聚合的落脚点是否是聚合内所有标记的平均中心|

## 示例

### 聚合动态添加的点坐标

#### 代码

```html
<template>
<baidu-map class="map" center="中国">
  <bml-marker-clusterer :averageCenter="true">
    <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
  </bml-marker-clusterer>
</baidu-map>
</template>

<script>
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {
  data () {
    // 插入 10 个随机点
    const markers = []
    for (let i = 0; i < 10; i++) {
      const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
      this.markers.push(position)
    }
    return {
      markers
    }
  },
  components: {
    BmlMarkerClusterer
  }
}
</script>
```


#### 示例

<doc-preview>
<baidu-map class="map" center="中国" :scroll-wheel-zoom="true" :double-click-zoom="true">
  <bml-marker-clusterer :averageCenter="true" :styles="styles">
    <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}" @dragend="updateMarker($event, marker)" :dragging="true"></bm-marker>
  <bml-marker-clusterer>
</baidu-map>
<md-button class="md-raised md-primary" @click="addMarker">添加一个随机点</md-button>
<md-button class="md-raised md-primary" @click="removeMarker">删除上一个点</md-button>
<md-button class="md-raised md-primary" @click="changeStyles">更换皮肤</md-button>
</doc-preview>

<script>
import {BmlMarkerClusterer} from '../../../components/index.js'
export default {
  data () {
    return {
      markers: [],
      styles: []
    }
  },
  components: {
    BmlMarkerClusterer
  },
  methods: {
    addMarker () {
      const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
      this.markers.push(position)
    },
    updateMarker ({point}, marker) {
      marker.lng = point.lng
      marker.lat = point.lat
    },
    removeMarker () {
      this.markers.pop()
    },
    changeStyles () {
      this.customStyles = !this.customStyles
      const EXAMPLE_URL = "http://api.map.baidu.com/library/MarkerClusterer/1.2/examples/"
      const styles = [{
        url: EXAMPLE_URL + 'images/heart30.png',
        size: {
          width: 30,
          height: 26
        },
        opt_anchor: [16, 0],
        textColor: '#ff00ff',
        opt_textSize: 10
      }, {
        url: EXAMPLE_URL + 'images/heart40.png',
        size: {
          width: 40,
          height: 35
        },
        opt_anchor: [40, 35],
        textColor: '#ff0000',
        opt_textSize: 12
      }, {
        url: EXAMPLE_URL + 'images/heart50.png',
        size: {
          width: 50,
          height: 44
        },
        opt_anchor: [32, 0],
        textColor: 'white',
        opt_textSize: 14
      }]
      this.styles = this.customStyles ? styles : []
    }
  }
}
</script>