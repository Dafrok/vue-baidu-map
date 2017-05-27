<template lang="md">

# Circle Overlay

`BmCircle`

## Instance Properties

|name|type|default|description|
|------|:---:|:---:|----|
|center|Point||The centre of circle.|
|radius|Number||The radius of circle.|
|strokeColor|String||Circle stroke color.|
|strokeWeight|Number||Circle stroke width.|
|strokeOpacity|Number||Circle stroke opacity.|
|strokeStyle|String|'solid'|Circle stroke style. `'solid'` or `'dashed'`.|
|fillColor|String||Circle fill color.|
|fillOpacity|Number||Circle fill opacity.|
|enableMassClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|enableEditing|Boolean|false|Enable editing the circle.|
|enableClicking|Boolean|true|Whether to respond to a click event.|

## Events

|name|parameter|description|
|------|:--:|----|
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
  <div class="toolbar">
    <table>
      <thead>
        <tr>
          <th>Center Longitude</th>
          <th>Center Latitude</th>
          <th>Radius</th>
        <tr>
      </thead>
      <tbody>
        <tr>
          <td><text-field pattern="-?[0-9]*(\.[0-9]+)?" v-model.number="circlePath.center.lng"></text-field></td>
          <td><text-field pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="circlePath.center.lat"></text-field></td>
          <td><text-field pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="circlePath.radius"></text-field></td>
        </tr>
      </tbody>
    </table>
  </div>
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
