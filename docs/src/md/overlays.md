<template lang="markdown">

# 覆盖物组件

## MapOverlayMarker

点标记

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|offset|Size||标注的位置偏移值|
|icon|Icon||标注所用的图标对象|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|dragging|Boolean|false|是否启用拖拽|
|clicking|Boolean|true|是否响应点击事件|
|raiseOnDrag|Boolean|false|拖拽标注时，标注是否开启离开地图表面效果|
|draggingCursor|String||拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范|
|rotation|Number||旋转角度|
|shadow|Icon||阴影图标|
|title|String||鼠标移到marker上的显示内容|
|animation|String||动画效果|

### 事件

|事件名|参数|描述|
|------|:--:|----|
|click|event{type, target}|点击标注图标后会触发此事件|
|dblclick|event{type, target, point,pixel}|双击标注图标后会触发此事件|
|mousedown|event{type, target, point,pixel}|鼠标在标注图上按下触发此事件|
|mouseup|event{type, target, point,pixel}|鼠标在标注图上释放触发此事件|
|mouseout|event{type, target, point,pixel}|鼠标离开标注时触发此事件|
|mouseover|event{type, target, point,pixel}|当鼠标进入标注图标区域时会触发此事件|
|remove|event{type, target}|移除标注时触发|
|infowindowclose|event{type, target}|信息窗在此标注上关闭时触发此事件|
|infowindowopen|event{type, target}|信息窗在此标注上打开时触发此事件|
|dragstart|event{type, target}|开始拖拽标注时触发此事件|
|dragging|event{type, target, pixel, point}|拖拽标注过程中触发此事件|
|dragend|event{type, target, pixel, point}|拖拽结束时触发此事件|
|rightclick|event{type, target}|右键点击标注时触发此事件|


### 示例

在地图中心添加可拖动的跳跃点标记

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-marker :point="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :label="{content: 'Marker Label', opts: {offset: {width: 20, height: -10}}}"/>
    </map-view>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <map-overlay-marker :point="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :label="markerLabel"/>
  </map-view>
</baidu-map>

## MapOverlayPolyline

折线

### 属性

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

### 事件

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

### 示例

在地图中添加可编辑的折线

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-polyline :points="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"/>
    </map-view>
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
<div class="columns">
  <div class="column is-5">
    <div class="box">
      <div class="control is-horizontal" v-for="(point, index) in polylinePath">
        <div class="control-label">
          <label class="label" v-text="`坐标${index + 1}`"></label>
        </div>
        <div class="control is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="经度" v-model="point.lng">
          </p>
          <p class="control is-expanded">
            <input class="input" type="email" placeholder="纬度" v-model="point.lat">
          </p>
        </div>
      </div>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary" @click="addPolylinePoint">添加一个坐标</button>
        </p>
      </div>
    </div>
  </div>
  <div class="column is-7">
    <baidu-map>
      <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
        <map-overlay-polyline :points="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"/>
      </map-view>
    </baidu-map>
  </div>
</div>

## MapOverlayPolygon

多边形

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|points|Array|[]|构成折线的点|
|strokeColor|String|undefined|折线颜色|
|strokeWeight|Number|undefined|折线的宽度，以像素为单位|
|strokeOpacity|Number|undefined|折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|fillColor|String|undefined|填充颜色。当参数为空时，折线覆盖物将没有填充效果|
|fillOpacity|Number|undefined|填充的透明度，取值范围0 - 1|
|enableMassClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|enableEditing|Boolean|false|是否启用线编辑|
|enableClicking|Boolean|true|是否响应点击事件|

### 事件

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


### 示例

在地图中添加可编辑的多边形

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-polygon :points="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath"/>
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
      <div class="control is-horizontal" v-for="(point, index) in polygonPath">
        <div class="control-label">
          <label class="label" v-text="`坐标${index + 1}`"></label>
        </div>
        <div class="control is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="经度" v-model="point.lng">
          </p>
          <p class="control is-expanded">
            <input class="input" type="email" placeholder="纬度" v-model="point.lat">
          </p>
        </div>
      </div>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary" @click="addPolygonPoint">添加一个坐标</button>
        </p>
      </div>
    </div>
  </div>
  <div class="column is-7">
    <baidu-map>
      <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
        <map-overlay-polygon :points="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :fill-opacity="0.5" :editing="true" @lineupdate="updatePolygonPath"/>
      </map-view>
    </baidu-map>
  </div>
</div>

## MapOverlayCircle

圆形

### 属性

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

### 事件

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


### 示例

在地图中添加圆形

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-circle :center="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath"/>
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

## MapOverlayLabel

标签

### 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|content|String||文本标注的内容|
|title|String||当鼠标移至标注上时显示此字段|
|labelStyle|Object||文本标注的样式|
|offset|Size||文本标注的位置偏移值|
|position|Point||文本标注的地理位置|
|zIndex|Number||文本标注的z轴位置|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|

### 事件

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


### 示例

在地图中添加圆形

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-label content="This is a label"/>
    </map-view>
  </baidu-map>
</template>
```

#### 预览
<baidu-map>
  <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <map-overlay-label content="This is a label" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '24px'}" title="Hover me"/>
  </map-view>
</baidu-map>
</template>

<script>
export default {
  data () {
    return {
      markerPoint: {
        lng: 116.404,
        lat: 39.915
      },
      markerLabel: {
        content: 'Marker Label',
        opts: {
          offset: {
            width: 20,
            height: -10
          }
        }
      },
      polylinePath: [
        {lng: 116.404, lat: 39.915},
        {lng: 116.405, lat: 39.920},
        {lng: 116.423493, lat: 39.907445}
      ],
      polygonPath: [
        {lng: 116.412732, lat: 39.911707},
        {lng: 116.39455, lat: 39.910932},
        {lng: 116.403461, lat: 39.921336}
      ],
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
    updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    },
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    },
    addPolygonPoint () {
      this.polygonPath.push({lng: 116.404, lat: 39.915})
    },
    updateCirclePath (e) {
      this.circlePath.center = e.target.getCenter()
      this.circlePath.radius = e.target.getRadius()
    }
  }
}
</script>