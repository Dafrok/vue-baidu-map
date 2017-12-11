<template lang="md">

# Circle Overlay

`BmCircle`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|center|Point||The centre of circle.|
|radius|Number||The radius of circle.|
|strokeColor|String||Circle stroke color.|
|strokeWeight|Number||Circle stroke width.|
|strokeOpacity|Number||Circle stroke opacity.|
|strokeStyle|String|'solid'|Circle stroke style. `'solid'` or `'dashed'`.|
|fillColor|String||Circle fill color.|
|fillOpacity|Number||Circle fill opacity.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|editing|Boolean|false|Enable editing the circle.|
|clicking|Boolean|true|Whether to respond to a click event.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the circle.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the circle.|
|mousedown|event{type, target, point, pixel}|Triggers when the mouse is pressed down on the circle.|
|mouseup|event{type, target, point, pixel}|Triggers when the mouse is released on the circle.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the circle.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the circle.|
|remove|event{type, target}|Triggers when the circle is removed.|
|lineupdate|event{type, target}|Triggers when the circle is updated.|

## Examples

### Add an editable circle on the map

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      circlePath: {
        center: {
          lng: 116.404,
          lat: 39.915
        },
        radius: 500
      }
    }
  },
  methods: {
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-circle :center="circlePath.center" :radius="circlePath.radius" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Longitude</md-table-head>
      <md-table-head>Latitude</md-table-head>
      <md-table-head>Radius</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="circlePath.center.lng" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="circlePath.center.lat" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="circlePath.radius" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>  
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      circlePath: {
        center: {
          lng: 116.404,
          lat: 39.915
        },
        radius: 500
      }
    }
  },
  methods: {
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    }
  }
}
</script>
