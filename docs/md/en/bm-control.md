# Custom Control

`BmControl`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a custom control on the map

#### Code

```html
<template>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bm-control>
      <button @click="addZoom(19)">缩放至最大</button>
      <button @click="addZoom(10)">还原</button>
      <button @click="addZoom(3)">缩放至最小</button>
    </bm-control>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      zoom: 10
    }
  },
  methods: {
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>
```

#### Preview 

<doc-preview>
  <baidu-map class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bm-control>
      <button @click="addZoom(19)">Zoom Max</button>
      <button @click="addZoom(10)">Reset</button>
      <button @click="addZoom(3)">Zoom Min</button>
    </bm-control>
  </baidu-map>
</doc-preview>

<script>
export default {
  data () {
    return {
      zoom: 10
    }
  },
  methods: {
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>