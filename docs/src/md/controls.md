<template lang="markdown">

# 控件组件

控件组件是属于 MapView 组件的子组件，通过声明这些在 MapView 上增加地图的控件。

## MapControlScale

比例尺控件

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
  <baidu-map>
    <map-view class="map">
      <map-control-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  <map-view/>
</baidu-map>

## MapControlNavigation

缩放控件

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
  <baidu-map>
    <map-view class="map">
      <map-control-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  <map-view/>
</baidu-map>

## MapControlMapType

地图类型控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|type|MapTypeControlType|undefined|控件样式|
|mapTypes|Array|undefined|控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型|

### 示例

在地图左上角加入地图类型控件

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
<baidu-map>
  <map-view class="map">
    <map-control-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"/>
  <map-view/>
</baidu-map>

## MapControlOverviewMap

缩略图控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|size|Size|undefined|缩略地图控件的大小|
|isOpen|Boolean|false|缩略地图添加到地图后的开合状态|

### 事件
|事件名|参数|描述|
|------|:---:|----|
|viewchanged|event{type, target, isOpen}|缩略地图开合状态发生变化后触发此事件|
|viewchanging|event{type, target}|缩略地图开合状态发生变化过程中触发此事件|

### 示例

在地图右下角加入缩略图控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"/>
  <map-view/>
</baidu-map>
</template>

## MapControlGeolocation

定位控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|showAddressBar|Boolean|undefined|是否显示定位信息面板。默认显示定位信息面板|
|enableAutoLocation|Boolean|false|添加控件时是否进行定位。默认添加控件时不进行定位|
|locationIcon|Icon|undefined|可自定义定位中心点的Icon样式|

### 事件
|事件名|参数|描述|
|------|:---:|----|
|locationSuccess|{point, AddressComponent}|定位成功后触发此事件|
|locationError|{StatusCode}|定位失败后触发此事件|

### 示例

在地图右下角加入定位控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true"/>
  <map-view/>
</baidu-map>
</template>

## MapControlCopyright

版权控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|copyright|Array|undefined|版权信息列表|

### 示例

在地图右上角加入版权信息控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-copyright
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {longitude: 110, latitude: 40}, sw:{longitude: 0, latitude: 0}}}]"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {longitude: 110, latitude: 40}, sw:{longitude: 0, latitude: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]"/>
  <map-view/>
</baidu-map>

## MapControlCityList

城市选择控件

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|

### 事件
|事件名|参数|描述|
|------|:---:|----|
|changeBefore||切换城市前触发此事件|
|changeAfter||切换城市后触发此事件|


### 示例

在地图左上角加入城市切换控件

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-control-city-list anchor="BMAP_ANCHOR_TOP_LEFT"/>
    <map-view/>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map">
    <map-control-city-list anchor="BMAP_ANCHOR_TOP_LEFT"/>
  <map-view/>
</baidu-map>
</template>

