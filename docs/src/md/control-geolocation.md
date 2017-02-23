# 定位控件

`MapControlGeolocation`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|showAddressBar|Boolean|undefined|是否显示定位信息面板。默认显示定位信息面板|
|autoLocation|Boolean|false|添加控件时是否进行定位。默认添加控件时不进行定位|
|locationIcon|Icon|undefined|可自定义定位中心点的Icon样式|

## 事件
|事件名|参数|描述|
|------|:---:|----|
|locationSuccess|{point, AddressComponent}|定位成功后触发此事件|
|locationError|{StatusCode}|定位失败后触发此事件|

## 示例

### 在地图右下角加入定位控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map slot="map">
    <map-view class="map">
      <map-control-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"/>
    <map-view/>
  </baidu-map>
</doc-preview>
