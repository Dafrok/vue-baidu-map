# Panorama Control

`BmPanorama`

## Instance Properties

|name|type|default|description|
|------|:---:|:---:|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a panorama control on the map

#### Code

```html
<template>
  <baidu-map class="map">
    <bm-panorama></bm-panorama>
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-panorama></bm-panorama>
  </baidu-map>
</doc-preview>