# 开始使用

## 安装

```shell
$ npm install vue-baidu-map
```

## 组件挂载

### 全局挂载

在入口文件中挂载全局 vue-baidu-map 组件

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.component('baidu-map', BaiduMap)
```

### 局部挂载

在 vue 组件中挂载局部 vue-baidu-map 组件

```vue
<script>
import BaiduMap from 'vue-baidu-map'
export default {
  BaiduMap
}
</script>
```
## 示例

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY"> /* YOUR_APP_KEY 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  </baidu-map>
</template>
```

#### 预览

<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" class="map">
</baidu-map>