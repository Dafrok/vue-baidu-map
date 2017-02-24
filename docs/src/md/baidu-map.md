<template lang="md">

# 地图容器

`BaiduMap` 百度地图容器，用于挂载百度地图核心类，并控制其它组件实例。该组件本身不用于渲染地图，是所有地图组件的根组件。\
地图容器的实质是一个空的 DOM 节点，它可以用于挂载 `map-view` 组件或其它 DOM 节点或组件。如果你需要二次开发或手动控制其子组件，可以在 `ready` 事件中使用返回的 `BMap` 类进行手动控制。

## 事件

|事件名|参数|描述|
|------|:--:|----|
|ready |BMap|百度地图 API 加载完毕时触发，返回一个百度地图的核心类。|

## 示例

### 在同一个容器中渲染两个不同类型的地图

#### 代码

```html
<template>
  <baidu-map class="map-container">
    <map-view class="map left" :center="center" :zoom="zoom" @moving="syncCenter" @moveend="syncCenter" @zoomend="syncZoom">
    </map-view>
    <map-view class="map right" :center="center" :zoom="zoom" mapType="BMAP_SATELLITE_MAP" @moving="syncCenter" @moveend="syncCenter" @zoomend="syncZoom">
    </map-view>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenter (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
    },
    syncZoom (e) {
      this.zoom = e.target.getZoom()
    }
  }
}
</script>

<style>
.map-container {
  width: 100%;
  height: 100%;
}
.map {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.map.left {
  right:50%;
}
.map.right {
  left: 50%;
}
</style>
```


#### 预览

<doc-preview>
  <baidu-map slot="map">
    <map-view class="map left" :center="center" :zoom="zoom" @moving="syncCenter" @moveend="syncCenter" @zoomend="syncZoom">
    </map-view>
    <map-view class="map right" :center="center" :zoom="zoom" mapType="BMAP_SATELLITE_MAP" @moving="syncCenter" @moveend="syncCenter" @zoomend="syncZoom">
    </map-view>
  </baidu-map>
</doc-preveiw>

</template>

<style lang="sass" scoped>
.map {
  &.left {
    right:50%;
  }
  &.right {
    left: 50%;
  }
}
</style>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenter (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
    },
    syncZoom (e) {
      this.zoom = e.target.getZoom()
    }
  }
}
</script>