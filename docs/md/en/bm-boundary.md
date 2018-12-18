<template lang="md">

# Boundary

The `BmBoundary` component rendered by and inherits from the` bm-polygon` component.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|name|String||Name of the boundary.|
|strokeColor|String||Polygon stroke color.|
|strokeWeight|Number||Polygon stroke width.|
|strokeOpacity|Number||Polygon stroke opacity.|
|strokeStyle|String|'solid'|Polygon stroke style. `'solid'` or `'dashed'`.|
|fillColor|String||Polygon fill color.|
|fillOpacity|Number||Polygon fill opacity.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|clicking|Boolean|true|Whether to respond to a click event.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the boundary.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the boundary.|
|mousedown|event{type, target, point, pixel}|Triggers when the mouse is pressed down on the boundary.|
|mouseup|event{type, target, point, pixel}|Triggers when the mouse is released on the boundary.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the boundary area.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the boundary area.|
|remove|event{type, target}|Triggers when the boundary is removed.|

## Example

### Add a boundary area of Haidian District, Beijing on the map

#### Code

```html
<baidu-map class="map" :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-boundary name="北京市海淀区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
</baidu-map>
```

#### Preview

<doc-preview>
<doc-preview>
  <baidu-map class="map" :center="{lng: 109.49384, lat: 26.84204}" :zoom="11">
    <bm-boundary :name="name" :strokeWeight="2" strokeColor="blue"></bm-boundary>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Boundary Name</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="name" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</doc-preview>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      name: '湖南省'
    }
  }
}
</script>