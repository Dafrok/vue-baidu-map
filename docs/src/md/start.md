<template lang="markdown">

# 开始使用

## 安装

```shell
$ npm install vue-baidu-map
```

## 组件挂载

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

## 快速上手

#### 代码

```html
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

#### 预览

<baidu-map>
  <map-view class="map">
</baidu-map>
</template>