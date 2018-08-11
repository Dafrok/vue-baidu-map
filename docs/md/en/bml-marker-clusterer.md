# Marker Clusterer

`BmlMarkerClusterer` is able to aggregate all the `BmMarker` components it contains.

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|gridSize|Size||The grid size of every clusters.|
|maxZoom|Number||The maximum zoom level.|
|minClusterSize|Number||The minimum number of a single cluster.|
|styles|Array[{url, size, opt_anchor, textColor, opt_textSize}]|[]|Custom style of the clusters.|
|averageCenter|Boolean|false|Whether a single cluster is the average center of all markers.|

## Examples

### Render a marker cluster with several dynamic markers

#### Code

```html
<template>
<baidu-map class="map" center="中国">
  <bml-marker-clusterer :averageCenter="true">
    <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
  </bml-marker-clusterer>
</baidu-map>
</template>

<script>
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {
  data () {
    // Add ten random points
    const markers = []
    for (let i = 0; i < 10; i++) {
      const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
      this.markers.push(position)
    }
    return {
      markers
    }
  },
  components: {
    BmlMarkerClusterer
  }
}
</script>
```


#### Preview

<doc-preview>
<baidu-map class="map" center="中国" :scroll-wheel-zoom="true" :double-click-zoom="true">
  <bml-marker-clusterer :averageCenter="true" :styles="styles">
    <bm-marker v-for="marker of markers" :position="marker" @dragend="updateMarker($event, marker)" :dragging="true"></bm-marker>
  <bml-marker-clusterer>
</baidu-map>
<md-button class="md-raised md-primary" @click="addMarker">Add Marker</md-button>
<md-button class="md-raised md-primary" @click="removeMarker">Remove Marker</md-button>
<md-button class="md-raised md-primary" @click="changeStyles">Change Styles</md-button>
</doc-preview>

<script>
import {BmlMarkerClusterer} from '../../../components/index.js'
export default {
  data () {
    return {
      markers: [],
      styles: []
    }
  },
  components: {
    BmlMarkerClusterer
  },
  methods: {
    addMarker () {
      const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
      this.markers.push(position)
    },
    updateMarker ({point}, marker) {
      marker.lng = point.lng
      marker.lat = point.lat
    },
    removeMarker () {
      this.markers.pop()
    },
    changeStyles () {
      this.customStyles = !this.customStyles
      const EXAMPLE_URL = "http://api.map.baidu.com/library/MarkerClusterer/1.2/examples/"
      const styles = [{
        url: EXAMPLE_URL + 'images/heart30.png',
        size: {
          width: 30,
          height: 26
        },
        opt_anchor: [16, 0],
        textColor: '#ff00ff',
        opt_textSize: 10
      }, {
        url: EXAMPLE_URL + 'images/heart40.png',
        size: {
          width: 40,
          height: 35
        },
        opt_anchor: [40, 35],
        textColor: '#ff0000',
        opt_textSize: 12
      }, {
        url: EXAMPLE_URL + 'images/heart50.png',
        size: {
          width: 50,
          height: 44
        },
        opt_anchor: [32, 0],
        textColor: 'white',
        opt_textSize: 14
      }]
      this.styles = this.customStyles ? styles : []
    }
  }
}
</script>