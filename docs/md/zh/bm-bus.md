<template lang="md">

# 公交路线检索

`BmBus`

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|location|String, Point, None||location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。|
|keyword|String||公交线路关键词|
|panel|Boolean|true|是否选展现检索结果面板。|
|autoViewport|Boolean||检索结束后是否自动调整地图视野。|
|selectFirstResult|Boolean||是否选择第一个检索结果。|

## 事件

|事件名|参数|描述|
|------|----|----|
|getbuslistcomplete|{rs: BusListResult}|设置公交列表查询后的回调函数。|
|getbuslinecomplete|{rs: BusLine|设置公交线路查询后的回调函数。|
|buslisthtmlset|{container: HTMLElement}|公交列表结果页渲染后回调函数。|
|buslinehtmlset|{container: HTMLElement}|公交线路结果页渲染后回调函数。|
|markersset|{pois: Array, transfers: Array}|标注添加完成后的回调函数。|
|polylinesset|{routes: Array, routes: Array}|折线添加完成后的回调函数。|

## 示例

### 查询北京331路公交车途径路线

#### 代码

```html
<template>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-bus keyword="331" :auto-viewport="true" location="北京"></bm-bus>
</baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-bus keyword="331" :auto-viewport="true" location="北京"></bm-bus>
  </baidu-map>
</doc-preview>
</template>