# VUE BAIDU MAP

<p align="center">
  <img src="https://dafrok.github.io/vue-baidu-map/favicon.png" width="200px">
</p>

[![npm version](https://badge.fury.io/js/vue-baidu-map.svg)](https://badge.fury.io/js/vue-baidu-map)
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map.svg)](http://packagequality.com/#?package=vue-baidu-map)

基于 Vue 2.x 的百度地图组件库

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
  <baidu-map class="map">
  </baidu-map>
</template>

<style>
/* 地图容器必须设置宽和高属性 */
.map {
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
