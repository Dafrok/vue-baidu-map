<template lang="md">

# Driving Route Search

`BmDriving`

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|location|String, Point, None||Search area. The type can be empty, coordinate point or city name.|
|start|String, Point, LocalResultPoi||The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
|end|String, Point, LocalResultPoi||The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
|startCity|String||The starting city, can be city name or city code.|
|endCity|String||The end city can be city name or city code.|
|waypoints|Array||The set of the through points. Support up to 10 points or names.|
|policy|TransitPolicy||Policy parameters for driving route.|
|panel|Boolean|true|Whether to show the result panel.|
|autoViewport|Boolean||Whether to adjust the viewport after search.|
|selectFirstResult|Boolean||Whether to select the first search result.|

## Events

|name|parameter|description|
|------|----|----|
|markersset|{pois: Array}|Triggers when markers are set.|
|infohtmlset|{poi: LocalResultPoi}|Triggers when info windows are set.|
|resultshtmlset|{container: HTMLElement}|Triggers when the result panel is set.|
|searchcomplete|{results: [LocalResult]}|Triggers when the search is completed.|
|polylinesset|{routes: Array, routes: Array}|Triggers when the polyline is set.|

## Examples

### Search driving route with three waypoints

#### Code

```html
<template>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-driving
      start="新街口"
      end="新街口"
      startCity="北京"
      endCity="南京"
      :auto-viewport="true"
      :waypoints="['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']"></bm-driving>
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-driving
    start="新街口"
    end="新街口"
    startCity="北京"
    endCity="南京"
    :auto-viewport="true"
    :waypoints="['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']"></bm-driving>
</baidu-map>
</doc-preview>

### Search driving route with different policies

#### Code

```html
<template>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-driving
      start="天通苑北"
      end="宋家庄地铁站"
      :auto-viewport="true"
      policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
      :panel="false"
      location="北京"
      :waypoints="['西二旗']">
    </bm-driving>
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
<div class="toolbar">
  <md-button class="md-raised md-primary" @click="leastDistance">
    Least Distance
  </md-button>
  <md-button class="md-raised md-primary" @click="leastTime">
    Least Time
  </md-button>
</div>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-driving :panel="false" start="天通苑北" end="宋家庄地铁站" :auto-viewport="true" location="北京" :policy="policy" :waypoints="['西二旗']"></bm-driving>
</baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      policy: ''
    }
  },
  methods: {
    leastDistance () {
      this.policy = "BMAP_DRIVING_POLICY_LEAST_DISTANCE"
    },
    leastTime () {
      this.policy = "BMAP_DRIVING_POLICY_LEAST_TIME"
    }
  }
}
</script>