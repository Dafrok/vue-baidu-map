# 地图控件

## 比例尺控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|

### 示例

在右上角加入比例尺控件

#### 代码

```html
<template>
  <baidu-map ak="YOUR_APP_KEY" anchor="BMAP_ANCHOR_TOP_LEFT">
    <scale-control/>
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import {ScaleControl} from 'vue-baidu-map'

export default {
  components: {
    BaiduMap,
    ScaleControl
  }
}
</script>
```

#### 预览
<baidu-map class="map" ak="C6bKwIcQvm2gPPUIPjpSQpVD">
  <scale-control anchor="BMAP_ANCHOR_TOP_RIGHT"/>
</baidu-map>

## 缩放控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|type|NavigationControlType|undefined|平移缩放控件的类型|
|showZoomInfo|Boolean|undefined|是否显示级别提示信息|
|enableGeolocation|Boolean|false|控件是否集成定位功能|

### 示例

在右上角加入比例尺控件

#### 代码

```html
<template>
  <baidu-map ak="YOUR_APP_KEY" anchor="BMAP_ANCHOR_TOP_LEFT">
    <navigation-control anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import {ScaleControl} from 'vue-baidu-map'

export default {
  components: {
    BaiduMap,
    ScaleControl
  }
}
</script>
```

#### 预览
<baidu-map class="map" ak="C6bKwIcQvm2gPPUIPjpSQpVD">
  <navigation-control anchor="BMAP_ANCHOR_TOP_RIGHT"/>
</baidu-map>