# Copyright Control

`BmCopyright`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|copyright|Array||The list of copyright messages.|

## Examples

### Add a copyright control in the upper right corner of the map

#### Code

```html
<template>
  <baidu-map class="map" center="北京" :zoom="3">
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>Copyright message.</a>'}]">
    </bm-copyright>
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
  <baidu-map class="map" center="北京" :zoom="3">
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>Copyright meessage</a>'}]">
    </bm-copyright>
  </baidu-map>
</doc-preview>