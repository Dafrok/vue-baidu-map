# Traffic Layer

`BmTraffic`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|predictDate|PredictDate||Predict date of traffic.|

## Examples

### Traffic at 12 o'clock on Sundays

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bm-traffic :predictDate="{weekday: 7, hour: 12}">
    </bm-traffic>
  </baidu-map>
</template>
```

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="15">
    <bm-traffic :predictDate="{weekday: 7, hour: 12}">
    </bm-traffic>
  </baidu-map>
</doc-preview>