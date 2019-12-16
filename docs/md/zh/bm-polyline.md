<template lang="md">

# 折线

`BmPolyline`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|path|Array[Point]|[]|构成折线的点|
|strokeColor|String||折线颜色|
|strokeWeight|Number||折线的宽度，以像素为单位|
|strokeOpacity|Number||折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|editing|Boolean|false|是否启用线编辑|
|clicking|Boolean|true|是否响应点击事件|
|icons|Array[IconSequence]|[]|贴合折线的图标|

## 事件

|事件名|参数|描述|
|------|----|----|
|click|event{type, target, point, pixel}|点击折线后会触发此事件|
|dblclick|event{type, target, point, pixel}|双击折线后会触发此事件|
|mousedown|event{type, target, point, pixel}|鼠标在折线上按下触发此事件|
|mouseup|event{type, target, point, pixel}|鼠标在折线释放触发此事件|
|mouseout|event{type, target, point, pixel}|鼠标离开折线时触发此事件|
|mouseover|event{type, target, point, pixel}|当鼠标进入折线区域时会触发此事件|
|remove|event{type, target}|移除折线时触发|
|lineupdate|event{type, target}|覆盖物的属性发生变化时触发|

## 示例

### 在地图中添加可编辑的折线

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>坐标</md-table-head>
      <md-table-head>经度</md-table-head>
      <md-table-head>纬度</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in polylinePath" :key="index">
        <md-table-cell>{{`坐标-${index + 1}`}}</md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="point.lng" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="point.lat" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
  <md-button @click="addPolylinePoint" class="md-raised md-primary">
    添加一个坐标点
  </md-button>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ]
    }
  },
  methods: {
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
