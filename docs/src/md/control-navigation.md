# 缩放控件

`MapControlNavigation`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|
|type|NavigationControlType|undefined|平移缩放控件的类型|
|showZoomInfo|Boolean|undefined|是否显示级别提示信息|
|enableGeolocation|Boolean|false|控件是否集成定位功能|

## 示例

### 在右上角加入缩放控件

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