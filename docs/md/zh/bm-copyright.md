# 版权控件
`BmCopyright`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|
|copyright|Array||版权信息列表|

## 示例

### 在地图右上角加入版权信息控件

#### 代码

```html
<template>
  <baidu-map class="map" center="北京" :zoom="3">
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]">
    </bm-copyright>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map" center="北京" :zoom="3">
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]">
    </bm-copyright>
  </baidu-map>
</doc-preview>