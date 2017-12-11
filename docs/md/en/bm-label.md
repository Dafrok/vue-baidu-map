<template lang="md">

# Label Overlay

`BmLabel`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|content|String||Contents of the label.|
|title|String||Title of the label.|
|labelStyle|Object||Style of the label.|
|offset|Size||Offset of the label.|
|position|Point||Position of the label.|
|zIndex|Number||Z-index of the label.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the label.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the label.|
|mousedown|event{type, target, point, pixel}|Triggers when the mouse is pressed down on the label.|
|mouseup|event{type, target, point, pixel}|Triggers when the mouse is released on the label.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the label.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the label.|
|remove|event{type, target}|Triggers when the label is removed.|

## Examples

### Add a label on the map.

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-label content="Tiananmen" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '24px'}" title="Hover me"/>
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-label content="Tiananmen" :position="{lng: 116.404, lat: 39.915}" :labelStyle="labelStyle" title="Hover me"/>
  </baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      labelStyle: {color: 'red', fontSize : '24px'}
    }
  }
}
</script>