# 定位控件

`BmGeolocation`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|
|showAddressBar|Boolean||是否显示定位信息面板。默认显示定位信息面板|
|autoLocation|Boolean|false|添加控件时是否进行定位。根据 [W3C相关标准](https://www.w3.org/TR/geolocation-API/#privacy_for_uas) 描述，为保证用户隐私安全，geoLocation API 必须使用 SSL 连接，并获得用户的手动许可。请确保使用该属性时满足上述条件。|
|locationIcon|Icon||可自定义定位中心点的Icon样式|

## 事件
|事件名|参数|描述|
|------|-----|----|
|locationSuccess|{point, AddressComponent, marker}|定位成功后触发此事件|
|locationError|{StatusCode}|定位失败后触发此事件|

## 示例

### 在地图右下角加入定位控件

#### 代码

```html
<template>
  <baidu-map class="map" center="北京">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map" center="北京">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
</doc-preview>
