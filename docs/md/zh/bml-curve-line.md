<template lang="md">

# 弧线

`BmlCurveLine`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|points|Array[Point]|[]|构成弧线的关键点|
|strokeColor|String||折线颜色|
|strokeWeight|Number||折线的宽度，以像素为单位|
|strokeOpacity|Number||折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|editing|Boolean|false|是否启用线编辑|
|clicking|Boolean|true|是否响应点击事件|

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

### 在地图中添加可编辑的弧线

#### 代码

```html
<template>
<baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="5">
  <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
</baidu-map>
</template>

<script>
import {BmlCurveLine} from 'vue-baidu-map'
export default {
  components: {
    BmlCurveLine
  },
  methods: {
    update (e) {
      this.points = e.target.cornerPoints
    }
  },
  data () {
    return {
      points: [
        {lng: 116.432045, lat: 39.910683},
        {lng: 120.129721, lat: 30.314429},
        {lng: 121.491121, lat: 25.127053}
      ]
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 118.454, lat: 32.955}" :zoom="5" :scroll-wheel-zoom="true">
    <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>坐标</md-table-head>
      <md-table-head>经度</md-table-head>
      <md-table-head>纬度</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in points" :key="index">
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
  <md-button @click="addPoint" class="md-raised md-primary">
    添加一个坐标点
  </md-button>
</doc-preview>
</template>

<script>
import BmlCurveLine from '../../../components/extra/CurveLine.vue'
export default {
  components: {
    BmlCurveLine
  },
  methods: {
    addPoint () {
      this.points.push({
        lng: 116.404,
        lat: 39.915
      })
    },
    update (e) {
      this.points = e.target.cornerPoints
    }
  },
  data () {
    return {
      points: [
        {lng: 116.432045, lat: 39.910683},
        {lng: 120.129721, lat: 30.314429},
        {lng: 121.491121, lat: 25.127053}
      ]
    }
  }
}
</script>