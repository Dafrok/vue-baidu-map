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
所有的独立组件均存放在 `vue-baidu-map/components` 文件夹下，按需引用即可。
由于未编译的 ES 模块不能在大多数浏览器中直接运行，如果引入组件时发生运行时错误，请检查 webpack 的 loader 配置，确认 `include` 和 `exclude` 选项命中了组件库。

```html
<template>
  <baidu-map class="bm-view" ak="YOUR_APP_KEY">
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
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

### CDN 全局注册

```html
<script>
Vue.use(VueBaiduMap.default, {
  ak: 'YOUR_APP_KEY'
})
</script>
```

## 常见问题

- `BaiduMap` 组件容器本身是一个空的块级元素，如果容器不定义高度，百度地图将渲染在一个高度为 0 不可见的容器内。
- 没有设置 `center` 和 `zoom` 属性的地图组件是不进行地图渲染的。当`center` 属性为合法地名字符串时例外，因为百度地图会根据地名自动调整 `zoom` 的值。
- 由于百度地图 JS API 只有 JSONP 一种加载方式，因此 `BaiduMap` 组件及其所有子组件的渲染只能是异步的。因此，请使用在组件的 `ready` 事件来执行地图 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 `BMap` 类，更不要在这些时机修改 model 层。

### 错误用法

```html
<template>
  <baidu-map :center="center" :zoom="zoom"></baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  mounted () {
    this.lng = 116.404
    this.lat = 39.915
    this.zoom = 15
  }
}
</script>
```

### 正确用法

```html
<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler"></baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>
```

## Hello world!

```html
<template>
  <baidu-map class="map" center="北京"></baidu-map>
</template>
<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
```

<doc-preview>
  <baidu-map class="map" center="北京">
  </baidu-map>
</doc-preview>
