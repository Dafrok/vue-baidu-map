<template lang="md">

# Bus Route Search

`BmBus`

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|location|String, Point, None||Search area. The type can be empty, coordinate point or city name.|
|keyword|String||Keyword of buslines.|
|panel|Boolean|true|Whether to show the result panel.|
|autoViewport|Boolean||Whether to adjust the viewport after search.|
|selectFirstResult|Boolean||Whether to select the first search result.|

## Events

|name|parameter|description|
|------|----|----|
|getbuslistcomplete|{rs: BusListResult}|Triggers when the search of buses is completed.|
|getbuslinecomplete|{rs: BusLine|Triggers when the search of buslines is completed.|
|buslisthtmlset|{container: HTMLElement}|Triggers when the list of buses is rendered.|
|buslinehtmlset|{container: HTMLElement}|Triggers when busline list is rendered.|
|markersset|{pois: Array}|Triggers when markers are set.|
|polylinesset|{routes: Array, routes: Array}|Triggers when the polyline is set.|

## Examples

### Search the route of 331 bus route.

#### Code

```html
<template>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-bus keyword="331" :auto-viewport="true" location="北京"></bm-bus>
</baidu-map>
</template>
```

#### Preview

<doc-preview>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-bus keyword="331" :auto-viewport="true" location="北京"></bm-bus>
  </baidu-map>
</doc-preview>
</template>