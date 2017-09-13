# 比例尺控件

`BmScale`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|

## 示例

### 在右上角加入比例尺控件

#### 代码

```html
<template>
  <baidu-map class="map" center="北京">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map" center="北京">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</doc-preview>
