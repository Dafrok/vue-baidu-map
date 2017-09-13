# 城市选择控件

`BmCityList` 城市列表控件仅在地图视图尺寸足够大时生效。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|

## 事件
|事件名|参数|描述|
|------|-----|----|
|changeBefore||切换城市前触发此事件|
|changeAfter||切换城市后触发此事件|


## 示例

### 在地图左上角加入城市切换控件

#### 代码

```html
<template>
  <baidu-map class="map" style="height: 500px" center="北京">
    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map" style="height: 500px" center="北京">
    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
  </baidu-map>
</doc-preview>