# VUE BAIDU MAP

基于 Vue 2.0 的百度地图组件库。前期开发中，组件不齐全，API 不稳定，暂时不推荐在生产环境中使用。

## 文档

[https://dafrok.github.io/vue-baidu-map](https://dafrok.github.io/vue-baidu-map)

## 开始使用

### 安装

```bash
npm i --save vue-baidu-map
```

### 挂载

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

### 使用
```vue
<template>
  <baidu-map>
    <map-view class="map-view">
  </baidu-map>
</template>

<style>
.map-view {
  width: 400px;
  height: 300px;
}
</style>
```

## 贡献

```bash
npm i
npm run dev
```
