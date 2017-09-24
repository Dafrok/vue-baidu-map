<template lang="md">

# Point Collection

`BmPointCollection`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|points|Array[Point]|[]|The collections of points displayed on the map.|
|shape|[ShapeType](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b22)|BMAP_POINT_SHAPE_CIRCLE|Shape of the points.|
|size|[SizeType](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b23)|BMAP_POINT_SIZE_NORMAL|Size of the points.|
|color|String||Color of the points.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{currentTarget, point, returnValue, target, type}|Triggers when click on the point.|
|mouseout|event{type, target, point, pixel}|Triggers when the mouse leaves the point.|
|mouseover|event{type, target, point, pixel}|Triggers when the mouse enters the point.|

## Examples

### Add 1000 random points

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 105.000, lat: 38.000}" :zoom="4">
    <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      points: []
    }
  },
  methods: {
    clickHandler (e) {
      alert(`${e.point.lng}, ${e.point.lat}`);
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map class="map" @ready="addPoints" :center="{lng: 105.000, lat: 38.000}" :zoom="4">
    <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>
  </baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      points: []
    }
  },
  methods: {
    clickHandler (e) {
      alert(`${e.point.lng}, ${e.point.lat}`);
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
    }
  }
}
</script>