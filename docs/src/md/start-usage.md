# 快速上手

## 引入

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

## 挂载

```html
<template>
  <baidu-map class="bm-view">
  </baidu-map>
</template>

<style>
.bm-view {
  width: 400px;
  height: 300px;
}
</style>
```

## 注意事项

由于百度地图 JS API 只有 JSONP 一种加载方式，因此 `BaiduMap` 组件及其所有子组件的渲染只能是异步的。\
因此，请使用 `BaiduMap` 组件的 `ready` 事件来执行地图 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 `BMap` 类，更不要在这些时机修改 model 层。

### 错误用法

```html
<template>
  <baidu-map :center="center"></baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0}
    }
  },
  mounted () {
    this.lng = 116.404
    this.lat = 39.915
  }
}
</script>
```

### 正确用法

```html
<template>
  <baidu-map :center="center" @ready="handler"></baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0}
    }
  },
  methods: {
    handler () {
      this.lng = 116.404
      this.lat = 39.915
    }
  }
}
</script>
```

## 预览
<doc-preview>
  <baidu-map slot="map" class="map">
  </baidu-map>
</doc-preview>