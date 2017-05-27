# 比例尺控件

`BmScale`

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
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</doc-preview>

# Scale Control

`BmScale`

## Instance Properties

|name|type|default|description|
|------|:---:|:---:|----|
|anchor|ControlAnchor||The location of the control|
|offset|Size||The offset of the control|

## Examples

### Add a scale control in the upper right corner of the map

#### Code

```html
<template>
  <baidu-map class="map">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
  <baidu-map class="map">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</doc-preview>