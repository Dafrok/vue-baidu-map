# 地图类型控件

`MapControlMapType`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|type|MapTypeControlType|undefined|控件样式|
|mapTypes|Array|undefined|控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型|

## 示例

### 在地图左上角加入地图类型控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map slot="map">
    <map-view class="map">
      <map-control-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"/>
    <map-view/>
  </baidu-map>
</doc-preview>
