# 城市选择控件

`MapControlCityList` 城市列表控件仅在 PC 端生效。

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|

## 事件
|事件名|参数|描述|
|------|:---:|----|
|changeBefore||切换城市前触发此事件|
|changeAfter||切换城市后触发此事件|


## 示例

### 在地图左上角加入城市切换控件

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

