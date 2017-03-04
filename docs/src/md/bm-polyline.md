<template lang="md">

# 折线

`BmPolyline`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|points|Array|[]|构成折线的点|
|strokeColor|String|undefined|折线颜色|
|strokeWeight|Number|undefined|折线的宽度，以像素为单位|
|strokeOpacity|Number|undefined|折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
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

### 在地图中添加可编辑的折线

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polyline :points="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
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
  <baidu-map slot="map" class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-polyline :points="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
  </baidu-map>
  <div slot="bottom" class="mdl-card__actions mdl-card--border">
    <div class="mdl-grid" v-for="(point, index) in polylinePath">
      <div class="mdl-cell mdl-cell--6-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" v-model.number="point.lng">
          <label class="mdl-textfield__label" v-text="`坐标${index + 1}经度`"></label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="point.lat">
          <label class="mdl-textfield__label" v-text="`坐标${index + 1}纬度`"></label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>
    </div>
    <!-- Accent-colored raised button with ripple -->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" @click="addPolylinePoint">
      添加一个坐标
    </button>
  </div>
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
      this.$nextTick(global.componentHandler.upgradeDom)
    }
  }
}
</script>