<template lang="md">

# 公交路线规划

`BmTransit`

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|location|String, Point, None||location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。|
|start|String, Point, LocalResultPoi||起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。|
|end|String, Point, LocalResultPoi||终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。|
|policy|TransitPolicy||公交导航的策略参数|
|panel|Boolean|true|是否选展现检索结果面板。|
|pageCapacity|Number||设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效|
|autoViewport|Boolean||检索结束后是否自动调整地图视野。|
|selectFirstResult|Boolean||是否选择第一个检索结果。|

## 事件

|事件名|参数|描述|
|------|----|----|
|markersset|{pois: Array, transfers: Array}|标注添加完成后的回调函数。|
|infohtmlset|{poi: LocalResultPoi, html: HTMLElement}|标注气泡内容创建后的回调函数。|
|resultshtmlset|{container: HTMLElement}|结果列表添加完成后的回调函数。|
|searchcomplete|{results: TransitRouteResult}|检索完成后的回调函数。如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致|
|polylinesset|{routes: Array, routes: Array}|折线添加完成后的回调函数。|

## 示例

### 检索百度大厦到北京邮电大学西门的公交路线规划

#### 代码

```html
<template>
<baidu-map>
  <bm-view class="map" center="北京">
  </bm-view>
  <bm-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bm-transit>
</baidu-map>
</template>
```

#### 预览
<doc-preview>
<baidu-map>
  <bm-view class="map" center="北京">
  </bm-view>
  <bm-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bm-transit>
</baidu-map>
</doc-preview>
</template>
