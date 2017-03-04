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

## 预览
<doc-preview>
  <baidu-map slot="map" class="map">
  </baidu-map>
</doc-preview>