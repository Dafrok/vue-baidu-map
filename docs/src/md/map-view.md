# 地图视图

`MapView` 百度地图实例容器，是地图的可视化区域，每一个 `BaiduMap` 组件应对应唯一一个 `MapView` 组件。

## 实例属性

|属性名|类型|默认值|描述|
|------|:----:|:---:|---|
|center|Array|undefined|定位|
|zoom|Object|undefined|缩放等级|
|min-zoom|Number|undefined|最小缩放级别|
|max-zoom|Number|undefined|最大缩放级别|
|high-resolution|Boolean|true|高分屏模式 该项仅在地图组件挂载时加载一次|
|map-click|Boolean|true|允许点击 该项仅在地图组件挂载时加载一次|
|map-type|Number|global.BMAP_NORMAL_MAP|地图类型|
|dragging|Boolean|true|允许拖拽|
|scroll-wheel-zoom|Boolean|false|允许鼠标滚轮缩放|
|double-click-zoom|Boolean|true|允许双击缩放|
|keyboard|Boolean|true|允许键盘操作|
|inertial-dragging|Boolean|false|允许惯性拖拽|
|continuous-zoom|Boolean|false|允许无级缩放|
|pinch-to-zoom|Boolean|true|允许双指缩放|
|auto-resize|Boolean|true|允许自适应容器尺寸|

## 事件
|事件名|参数|描述|
|---|:----:|---|
|click|{type, target, point, pixel, overlay}|左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick|
|dblclick|{type, target, pixel, point}|鼠标双击地图时会触发此事件|
|rightclick|{type, target, point, pixel, overlay}|右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick|
|rightdblclick|{type, target, point, pixel, overlay}|右键双击地图时触发此事件|
|maptypechange|{type, target}|地图类型发生变化时触发此事件|
|mousemove|{type, target, point, pixel, overlay}|鼠标在地图区域移动过程中触发此事件|
|mouseover|{type, target}|鼠标移入地图区域时触发此事件|
|mouseout|{type, target}|鼠标移出地图区域时触发此事件|
|movestart|{type, target}|地图移动开始时触发此事件|
|moving|{type, target}|地图移动过程中触发此事件|
|moveend|{type, target}|地图移动结束时触发此事件|
|zoomstart|{type, target}|地图更改缩放级别开始时触发触发此事件|
|zoomend|{type, target}|地图更改缩放级别结束时触发触发此事件|
|addoverlay|{type, target}|当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件|
|addcontrol|{type, target}|当使用Map.addControl()方法向地图中添加单个控件时会触发此事件|
|removecontrol|{type, target}|当使用Map.removeControl()方法移除单个控件时会触发此事件|
|removeoverlay|{type, target}|当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件|
|clearoverlays|{type, target}|当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件|
|dragstart|{type, target, pixel, point}|开始拖拽地图时触发|
|dragging|{type, target, pixel, point}|拖拽地图过程中触发|
|dragend|{type, target, pixel, point}|停止拖拽地图时触发|
|addtilelayer|{type, target}|添加一个自定义地图图层时触发此事件|
|removetilelayer|{type, target}|移除一个自定义地图图层时触发此事件|
|load|{type, target, pixel, point, zoom}|调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块|
|resize|{type, target, size}|地图可视区域大小发生变化时会触发此事件|
|hotspotclick|{type, target, spots}|点击热区时触发此事件|
|hotspotover|{type, target, spots}|鼠标移至热区时触发此事件|
|hotspotout|{type, target, spots}|鼠标移出热区时触发此事件|
|tilesloaded|{type, target}|当地图所有图块完成加载时触发此事件|
|touchstart|{type, target, point,pixel}|触摸开始时触发此事件，仅适用移动设备|
|touchmove|{type, target, point,pixel}|触摸移动时触发此事件，仅适用移动设备|
|touchend|{type, target, point,pixel}|触摸结束时触发此事件，仅适用移动设备|
|longpress|{type, target, point,pixel}|长按事件，仅适用移动设备|

## 示例

### 设置经纬度和缩放等级

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map slot="map">
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</doc-preview>

### 开启滚轮缩放

#### 代码

```html
<template>
  <baidu-map>
    <map-view :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map slot="map">
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</doc-preview>

### 设置地图类型

#### 代码

```html
<template>
  <baidu-map>
    <map-view :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map slot="map">
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</doc-preview>

### 双向绑定

#### 代码

```html
<template>
  <div>
    <input v-model.number="center.lng">
    <input v-model.number="center.lat">
    <input v-model.number="zoom">
    <baidu-map>
      <map-view
        class="map"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        @moving="syncCenter"
        @moveend="syncCenter"
        @zoomend="syncZoom">
    </baidu-map>
  <div>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenter (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
    },
    syncZoom (e) {
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
```

#### 预览
<doc-preview>
  <baidu-map slot="map">
    <map-view class="map" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @moving="syncCenter" @moveend="syncCenter" @zoomend="syncZoom"></map-view>
  </baidu-map>
  <div slot="bottom" class="mdl-card__actions mdl-card--border">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" v-model.number="center.lng">
          <label class="mdl-textfield__label">经度</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?"v-model.number="center.lat">
          <label class="mdl-textfield__label">纬度</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" v-model.number="zoom">
          <label class="mdl-textfield__label">缩放</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>
    </div>
  </div>
</doc-preview>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    syncCenter (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
    },
    syncZoom (e) {
      this.zoom = e.target.getZoom()
    }
  }
}
</script>