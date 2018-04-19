<template lang="md">

# BaiduMap

`BaiduMap` is a container of Baidu Map core class and instance. It's the root component of other components of *vue-baidu-map*.\
The container is an empty DOM node which used to mount other components or DOM nodes.

## Instance Properties

|name|type|default|description|
|------|------|-----|---|
|ak|String||Baidu map developer platform application key. Valid only when registered locally.|
|center|Point, String||Center coordinate of the map.|
|zoom|Number||Zoom level of the map.|
|min-zoom|Number||The maximum limit of zoom level.|
|max-zoom|Number||The minimum limit of zoom level.|
|high-resolution|Boolean|true|High resolution mode.|
|map-click|Boolean|true|Allow to click on the map.|
|map-type|String|BMAP_NORMAL_MAP|Map type.|
|dragging|Boolean|true|Allow to drag on the map.|
|scroll-wheel-zoom|Boolean|false|Allow to zoom by mousewheel on the map.|
|double-click-zoom|Boolean|true|Allow to zoom by double click on the map.|
|keyboard|Boolean|true|Allow keyboard events on the map.|
|inertial-dragging|Boolean|false|Dragging with inertia.|
|continuous-zoom|Boolean|false|Continuous zoom.|
|pinch-to-zoom|Boolean|true|Allow pinch to zoom.|
|auto-resize|Boolean|true|Allow auto resize.|
|theme|Array||Set custom themes.|
|mapStyle|MapStyle||Set custom styles of the map.|
|~~theme~~|Array||Custom theme as an alias of `mapStyle.styleJson`, it might be **REMOVED** in the next major version, not be recommended.|


## Events

|name|parameter|description|
|---|------|---|
|click|{type, target, point, pixel, overlay}|Triggers when you click the map on the left mouse button.|
|dblclick|{type, target, pixel, point}|Triggers when you double click the map on the left mouse button.|
|rightclick|{type, target, point, pixel, overlay}|Triggers when you click the map on the right mouse button.|
|rightdblclick|{type, target, point, pixel, overlay}|Triggers when you double click the map on the right mouse button.|
|maptypechange|{type, target}|Triggers when the map type changes.|
|mousemove|{type, target, point, pixel, overlay}|Triggers when the mouse is moving on the map.|
|mouseover|{type, target}|Triggers when the mouse is moving over the map.|
|mouseout|{type, target}|Triggers when the mouse is moving out of the map.|
|movestart|{type, target}|Triggers at the beginning of the map movement.|
|moving|{type, target}|Triggers during map movement.|
|moveend|{type, target}|Triggers at the end of the map movement.|
|zoomstart|{type, target}|Triggers at the beginning of changing the zoom level.|
|zoomend|{type, target}|Triggers at the end of changing the zoom level.|
|addoverlay|{type, target}|Triggers when using the Map.addOverlay() method to add a single overlay to the map.|
|addcontrol|{type, target}|Triggers when using the Map.addControl() method to add a single control to the map.|
|removecontrol|{type, target}|Triggers when a single control is removed using the Map.removeControl() method.|
|removeoverlay|{type, target}|Triggers when a single overlay is removed using the Map.removeOverlau() method.|
|clearoverlays|{type, target}|Triggers when all overlays is removed by using the Map.clearOverlays() method at once.|
|dragstart|{type, target, pixel, point}|Triggers at the beginning of dragging the map.|
|dragging|{type, target, pixel, point}|Triggers when dragging the map.|
|dragend|{type, target, pixel, point}|Triggers at the end of dragging the map.|
|addtilelayer|{type, target}|Triggers when adding a custom tile layer.|
|removetilelayer|{type, target}|Triggers when removing a custom tile layer.|
|load|{type, target, pixel, point, zoom}|Trigger when the Map.centerAndZoom() method is called.|
|resize|{type, target, size}|Triggers when the map visual area size changes.|
|hotspotclick|{type, target, spots}|Triggers when the hot spot is clicked.|
|hotspotover|{type, target, spots}|Triggers when the mouse is moving over the hot spot.|
|hotspotout|{type, target, spots}|Triggers when the mouse is moving out of the hot spot.|
|tilesloaded|{type, target}|Triggers when all the tile layers of the map are loaded.|
|touchstart|{type, target, point,pixel}|Triggers at the beginning of touching the map, only for mobile devices.|
|touchmove|{type, target, point,pixel}|Triggers when touching is moved, only for mobile devices.|
|touchend|{type, target, point,pixel}|Triggers at the end of touching the map, only for mobile devices.|
|longpress|{type, target, point,pixel}|Trigger when the map is long pressed, only for mobile devices. |

## Custom Themes

Baidu Map instance allows users to set a custom theme.

> Reference: [Baidu map theme editor](http://developer.baidu.com/map/custom/)

## Examples

### Set latitude and longitude and zoom levels

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</doc-preview>

### Wheel Zoom

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</doc-preview>

### Set a Custom Theme

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :mapStyle="mapStyle">
  </baidu-map>
</template>
<script>
export default {
  data () {
    return {
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    }
  }
}
</script>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :mapStyle="mapStyle">
  </baidu-map>
</doc-preview>

### Set Map Type

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</doc-preview>

### Twoway Binding

#### Code

```html
<template>
  <div>
    <input v-model.number="center.lng">
    <input v-model.number="center.lat">
    <input v-model.number="zoom">
    <baidu-map 
        class="map"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom">
    </baidu-map>
  <div>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>Longitude</md-table-head>
      <md-table-head>Latitude</md-table-head>
      <md-table-head>Zoom</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="center.lng" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="center.lat" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="zoom" md-inline></md-input>
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
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15,
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    }
  },
  methods: {
     syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
