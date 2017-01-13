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

在右上角加入缩放控件

#### 代码

```html
<template>
  <baidu-map ak="YOUR_APP_KEY">
    <navigation-control anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map'
import {NavigationControl} from 'vue-baidu-map'

export default {
  components: {
    BaiduMap,
    NavigationControl
  }
}
</script>
```

#### 预览
<baidu-map class="map" ak="C6bKwIcQvm2gPPUIPjpSQpVD">
  <navigation-control anchor="BMAP_ANCHOR_TOP_RIGHT"/>
</baidu-map>

## 地图类型控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|type|MapTypeControlType|undefined|控件样式|
|mapTypes|Array|undefined|控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型|

### 示例

加入地图类型控件

#### 代码

```html
<template>
  <baidu-map ak="YOUR_APP_KEY">
    <map-type-control :map-types="[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]"/>
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
  <map-type-control :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"/>
</baidu-map>