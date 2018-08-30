<template lang="md">

# 多边形

`BmPolygon`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|path|Array[Point]|[]|构成折线的点|
|strokeColor|String||折线颜色|
|strokeWeight|Number||折线的宽度，以像素为单位|
|strokeOpacity|Number||折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|fillColor|String||填充颜色。当参数为空时，折线覆盖物将没有填充效果|
|fillOpacity|Number||填充的透明度，取值范围0 - 1|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|editing|Boolean|false|是否启用线编辑|
|clicking|Boolean|true|是否响应点击事件|

## 事件

|事件名|参数|描述|
|------|----|----|
|click|event{type, target, point, pixel}|点击多边形后会触发此事件|
|dblclick|event{type, target, point, pixel}|双击多边形后会触发此事件|
|mousedown|event{type, target, point, pixel}|鼠标在多边形上按下触发此事件|
|mouseup|event{type, target, point, pixel}|鼠标在多边形释放触发此事件|
|mouseout|event{type, target, point, pixel}|鼠标离开多边形时触发此事件|
|mouseover|event{type, target, point, pixel}|当鼠标进入多边形区域时会触发此事件|
|remove|event{type, target}|移除多边形时触发|
|lineupdate|event{type, target}|覆盖物的属性发生变化时触发|


## 示例

### 在地图中添加可编辑的多边形

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath"/>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ]
    }
  },
  methods: {
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :fill-opacity="0.5" :editing="true" @lineupdate="updatePolygonPath"></bm-polygon>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>坐标</md-table-head>
      <md-table-head>经度</md-table-head>
      <md-table-head>纬度</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row v-for="(point, index) in polygonPath" :key="index">
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
  <md-button class="md-raised md-primary" @click="addPolygonPoint">
    添加一个坐标点
  </md-button>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ]
    }
  },
  methods: {
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>