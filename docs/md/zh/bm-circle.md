<template lang="md">

# 圆形

`BmCircle` 圆形覆盖物组件由于内部实现所局限，在可编辑状态下进行双向绑定时更新 model 会重置组件状态。

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
|click|event{type, target, point, pixel}|鼠标点击圆形后会触发此事件|
|dblclick|event{type, target, point, pixel}|鼠标双击圆形后会触发此事件|
|mousedown|event{type, target, point, pixel}|鼠标在圆形上按下触发此事件|
|mouseup|event{type, target, point, pixel}|鼠标在圆形释放触发此事件|
|mouseout|event{type, target, point, pixel}|鼠标离开圆形时触发此事件|
|mouseover|event{type, target, point, pixel}|当鼠标进入圆形区域时会触发此事件|
|remove|event{type, target}|移除圆形时触发此事件|
|lineupdate|event{type, target}|圆形覆盖物的属性发生变化时触发此事件|



## 示例

### 在地图中添加圆形

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
  </baidu-map>
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
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-circle :center="circlePath.center" :radius="circlePath.radius" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
  </baidu-map>
  <div class="toolbar">
    <table>
      <thead>
        <tr>
          <th>圆心经度</th>
          <th>圆心纬度</th>
          <th>半径</th>
        <tr>
      </thead>
      <tbody>
        <tr>
          <td><text-field label="经度" pattern="-?[0-9]*(\.[0-9]+)?" v-model.number="circlePath.center.lng"></text-field></td>
          <td><text-field label="纬度" pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="circlePath.center.lat"></text-field></td>
          <td><text-field label="纬度" pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="circlePath.radius"></text-field></td>
        </tr>
      </tbody>
    </table>
  </div>
</doc-preview>
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
