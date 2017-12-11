<template lang="md">

# Polygon Overlay

`BmPolygon`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|path|Array[Point]|[]|The points that makes the polygon.|
|strokeColor|String||Polygon stroke color.|
|strokeWeight|Number||Polygon stroke width.|
|strokeOpacity|Number||Polygon stroke opacity.|
|strokeStyle|String|'solid'|Polygon stroke style. `'solid'` or `'dashed'`.|
|fillColor|String||Polygon fill color.|
|fillOpacity|Number||Polygon fill opacity.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|editing|Boolean|false|Enable editing the polygon.|
|clicking|Boolean|true|Whether to respond to a click event.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the polygon.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the polygon.|
|mousedown|event{type, target, point, pixel}|Triggers when the mouse is pressed down on the polygon.|
|mouseup|event{type, target, point, pixel}|Triggers when the mouse is released on the polygon.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the polygon.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the polygon.|
|remove|event{type, target}|Triggers when the polygon is removed.|
|lineupdate|event{type, target}|Triggers when the polygon is updated.|

## Examples

### Add an editable polygon on the map

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath"/>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ]
    }
  },
  methods: {
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :fill-opacity="0.5" :editing="true" @lineupdate="updatePolygonPath"></bm-polygon>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Points</md-table-head>
      <md-table-head>Longitude</md-table-head>
      <md-table-head>Latitude</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in polygonPath" :key="index">
        <md-table-cell>{{`Point-${index + 1}`}}</md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="point.lng" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="point.lat" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
  <md-button class="md-raised md-primary" @click="addPolygonPoint">
    Add Point
  </md-button>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ]
    }
  },
  methods: {
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>