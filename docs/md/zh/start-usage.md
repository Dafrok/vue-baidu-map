# 快速上手

## 使用

### 全局注册

全局注册将一次性引入百度地图组件库的所有组件。

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

```html
<template>
  <baidu-map class="bm-view">
  </baidu-map>
</template>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
```

### 局部注册

如果有按需引入组件的需要，可以选择局部注册百度地图组件，这将减少工程打包后的容量尺寸。局部注册的 `BaiduMap` 组件**必须**声明 `ak` 属性。

```html
<template>
  <baidu-map class="bm-view" ak="YOUR_APP_KEY">
  </baidu-map>
</template>

<script>
import {BaiduMap} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
```

## 常见问题

- `BaiduMap` 组件容器本身是一个空的块级元素，如果容器不定义高度，百度地图将渲染在一个高度为 0 不可见的容器内。
- 由于百度地图 JS API 只有 JSONP 一种加载方式，因此 `BaiduMap` 组件及其所有子组件的渲染只能是异步的。因此，请使用在组件的 `ready` 事件来执行地图 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 `BMap` 类，更不要在这些时机修改 model 层。

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