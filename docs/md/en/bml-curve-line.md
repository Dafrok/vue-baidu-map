<template lang="md">

# Curve Line

`BmlCurveLine`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|path|Array[Point]|[]|The key points that makes the curve line.|
|strokeColor|String||Polyline stroke color.|
|strokeWeight|Number||Polyline stroke width.|
|strokeOpacity|Number||Polyline stroke opacity.|
|strokeStyle|String|'solid'|Polyline stroke style. `'solid'` or `'dashed'`.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|editing|Boolean|false|Enable editing the polyline.|
|clicking|Boolean|true|Whether to respond to a click event.|

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
<baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="5">
  <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
</baidu-map>
</template>

<script>
import {BmlCurveLine} from 'vue-baidu-map'
export default {
  components: {
    BmlCurveLine
  },
  methods: {
    update (e) {
      this.points = e.target.cornerPoints
    }
  },
  data () {
    return {
      points: [
        {lng: 116.432045, lat: 39.910683},
        {lng: 120.129721, lat: 30.314429},
        {lng: 121.491121, lat: 25.127053}
      ]
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="5" :scroll-wheel-zoom="true">
    <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Points</md-table-head>
      <md-table-head>Longitude</md-table-head>
      <md-table-head>Latitude</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in points" :key="index">
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
  <md-button @click="addPoint" class="md-raised md-primary">
    Add Point
  </md-button>
</doc-preview>
</template>

<script>
import BmlCurveLine from '../../../components/extra/CurveLine.vue'
export default {
  components: {
    BmlCurveLine
  },
  methods: {
    addPoint () {
      this.points.push({
        lng: 116.404,
        lat: 39.915
      })
    },
    update (e) {
      this.points = e.target.cornerPoints
    }
  },
  data () {
    return {
      points: [
        {lng: 116.432045, lat: 39.910683},
        {lng: 120.129721, lat: 30.314429},
        {lng: 121.491121, lat: 25.127053}
      ]
    }
  }
}
</script>