<template lang="md">

# Polyline Overlay

`BmPolyline`

## Instance Properties
|name|type|default|description|
|------|-----|-----|----|
|path|Array[Point]|[]|The points that makes the polyline.|
|strokeColor|String||Polyline stroke color.|
|strokeWeight|Number||Polyline stroke width.|
|strokeOpacity|Number||Polyline stroke opacity.|
|strokeStyle|String|'solid'|Polyline stroke style. `'solid'` or `'dashed'`.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|editing|Boolean|false|Enable editing the polyline.|
|clicking|Boolean|true|Whether to respond to a click event.|
|icons|Array[IconSequence]|[]|The icons of the polyline.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the polyline.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the polyline.|
|mousedown|event{type, target, point, pixel}|Triggers when the mouse is pressed down on the polyline.|
|mouseup|event{type, target, point, pixel}|Triggers when the mouse is released on the polyline.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the polyline.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the polyline.|
|remove|event{type, target}|Triggers when the polyline is removed.|
|lineupdate|event{type, target}|Triggers when the polyline is updated.|

## Examples

### Add an editable polyline on the map

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
```

#### Example

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Points</md-table-head>
      <md-table-head>Longitude</md-table-head>
      <md-table-head>Latitude</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in polylinePath" :key="index">
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
  <md-button @click="addPolylinePoint" class="md-raised md-primary">
    Add Point
  </md-button>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
