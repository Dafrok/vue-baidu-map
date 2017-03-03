# 比例尺控件

`MapControlScale`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|anchor|ControlAnchor|undefined|控件停靠位置|
|offset|Size|undefined|控件偏移值|

## 示例

### 在右上角加入比例尺控件

#### 代码

```html
<template>
  <baidu-map class="map">
    <map-control-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map slot="map" class="map">
    <map-control-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
  </baidu-map>
</doc-preview>