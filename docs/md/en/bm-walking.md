<template lang="md">

# Walking Route Search

`BmWalking`

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|location|String, Point, None||Search area. The type can be empty, coordinate point or city name.|
|start|String, Point, LocalResultPoi||The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
|end|String, Point, LocalResultPoi||The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
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

### Search walking route planning on the map

#### Code

```html
<template>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-walking start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bm-walking>
</baidu-map>
</template>
```

#### Preview

<doc-preview>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-walking start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bm-walking>
</baidu-map>
</doc-preview>
</template>