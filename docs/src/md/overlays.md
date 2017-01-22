<template lang="markdown">

# 覆盖物组件

## MapOverlayMarker

点标记

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|offset|Size||标注的位置偏移值|
|icon|Icon||标注所用的图标对象|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|dragging|Boolean|false|是否启用拖拽|
|clicking|Boolean|true|是否响应点击事件|
|raiseOnDrag|Boolean|false|拖拽标注时，标注是否开启离开地图表面效果|
|draggingCursor|String||拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范|
|rotation|Number||旋转角度|
|shadow|Icon||阴影图标|
|title|String||鼠标移到marker上的显示内容|
|animation|String||动画效果|

### 事件

|事件名|参数|描述|
|------|:--:|----|
|click|event{type, target}|点击标注图标后会触发此事件|
|dblclick|event{type, target, point,pixel}|双击标注图标后会触发此事件|
|mousedown|event{type, target, point,pixel}|鼠标在标注图上按下触发此事件|
|mouseup|event{type, target, point,pixel}|鼠标在标注图上释放触发此事件|
|mouseout|event{type, target, point,pixel}|鼠标离开标注时触发此事件|
|mouseover|event{type, target, point,pixel}|当鼠标进入标注图标区域时会触发此事件|
|remove|event{type, target}|移除标注时触发|
|infowindowclose|event{type, target}|信息窗在此标注上关闭时触发此事件|
|infowindowopen|event{type, target}|信息窗在此标注上打开时触发此事件|
|dragstart|event{type, target}|开始拖拽标注时触发此事件|
|dragging|event{type, target, pixel, point}|拖拽标注过程中触发此事件|
|dragend|event{type, target, pixel, point}|拖拽结束时触发此事件|
|rightclick|event{type, target}|右键点击标注时触发此事件|


### 示例

在地图中心添加可拖动的跳跃点标记

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{longitude: 116.404, latitude: 39.915}" :zoom="15">
      <map-overlay-marker :point="{longitude: 116.404, latitude: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"/>
    </map-view>
  </baidu-map>
</template>
```

#### 预览

<baidu-map>
  <map-view class="map" :center="{longitude: 116.404, latitude: 39.915}" :zoom="15">
    <map-overlay-marker :point="{longitude: 116.404, latitude: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"/>
  </map-view>
</baidu-map>
</template>