<template lang="md">

# 圆形

`MapOverlayCircle` 圆形覆盖物组件由于内部实现所局限，暂时不能进行双向绑定。

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|center|Point|undefined|圆心，单位为米|
|radius|Number|undefined|半径，单位为米|
|strokeColor|String|undefined|折线颜色|
|strokeWeight|Number|undefined|折线的宽度，以像素为单位|
|strokeOpacity|Number|undefined|折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|fillColor|String|undefined|填充颜色。当参数为空时，折线覆盖物将没有填充效果|
|fillOpacity|Number|undefined|填充的透明度，取值范围0 - 1|
|enableMassClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|enableEditing|Boolean|false|是否启用线编辑|
|enableClicking|Boolean|true|是否响应点击事件|

## 事件

|事件名|参数|描述|
|------|:--:|----|
|click|event{type, target, point, pixel}|点击折线后会触发此事件|
|dblclick|event{type, target, point, pixel}|双击折线后会触发此事件|
|mousedown|event{type, target, point, pixel}|鼠标在折线上按下触发此事件|
|mouseup|event{type, target, point, pixel}|鼠标在折线释放触发此事件|
|mouseout|event{type, target, point, pixel}|鼠标离开折线时触发此事件|
|mouseover|event{type, target, point, pixel}|当鼠标进入折线区域时会触发此事件|
|remove|event{type, target}|移除折线时触发|
|lineupdate|event{type, target}|覆盖物的属性发生变化时触发|


## 示例

### 在地图中添加圆形

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-circle :center="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updatePolygonPath"/>
    </map-view>
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
      this.polylinePath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    }
  }
}
</script>
```

#### 预览
<div class="columns">
  <div class="column is-5">
    <div class="box">
      <div class="control is-horizontal">
        <div class="control-label">
          <label class="label" v-text="`圆心`"></label>
        </div>
        <div class="control is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="经度" v-model.number="circlePath.center.lng">
          </p>
          <p class="control is-expanded">
            <input class="input" type="email" placeholder="纬度" v-model.number="circlePath.center.lat">
          </p>
        </div>
      </div>
      <div class="control is-horizontal">
        <div class="control-label">
          <label class="label" v-text="`半径`"></label>
        </div>
        <div class="control">
          <p class="control">
            <input class="input" type="text" placeholder="半径" v-model="circlePath.radius">
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="column is-7">
    <baidu-map>
      <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
        <map-overlay-circle :center="circlePath.center" :radius="circlePath.radius" @lineupdate="updateCirclePath"/>
      </map-view>
    </baidu-map>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      circlePath: {
        center: {
          lng: 116.404,
          lat: 39.915
        },
        radius: 500
      }
    }
  },
  methods: {
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    }
  }
}
</script>