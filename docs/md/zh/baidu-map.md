<template lang="md">

# 地图容器

`BaiduMap` 百度地图容器，用于挂载百度地图核心类和一个百度地图实例。是所有地图组件的根组件。\
地图容器的实质是一个空的 DOM 节点，它可以用于挂载 `BmView` 组件或其它 DOM 节点或组件。如果你需要二次开发或手动控制其子组件，可以使用在 `ready` 事件中使用返回的 `BMap` 类和 `map` 实例进行手动控制。

## 实例属性

|属性名|类型|默认值|描述|
|------|------|-----|---|
|ak|String||百度地图开发者平台申请的密钥，仅在局部注册组件时声明。|
|center|Point, String||定位, 可使用如“广州市海珠区”的地区字符串，也可以使用对象如 {lng: 116.404, lat: 39.915} 表示经纬度|
|zoom|Number||缩放等级|
|min-zoom|Number||最小缩放级别|
|max-zoom|Number||最大缩放级别|
|high-resolution|Boolean|true|高分屏模式 该项仅在地图组件挂载时加载一次|
|map-click|Boolean|true|允许点击 该项仅在地图组件挂载时加载一次|
|map-type|String|global.BMAP_NORMAL_MAP|地图类型|
|dragging|Boolean|true|允许拖拽|
|scroll-wheel-zoom|Boolean|false|允许鼠标滚轮缩放|
|double-click-zoom|Boolean|true|允许双击缩放|
|keyboard|Boolean|true|允许键盘操作|
|inertial-dragging|Boolean|false|允许惯性拖拽|
|continuous-zoom|Boolean|false|允许无级缩放|
|pinch-to-zoom|Boolean|true|允许双指缩放|
|auto-resize|Boolean|true|允许自适应容器尺寸|
|mapStyle|MapStyle||自定义地图样式主题|
|~~theme~~|Array||自定义主题，是 `mapStyle.styleJson` 属性的别名，可能会在下一个主版本中 **移除** ，不推荐使用|

## 事件
|事件名|参数|描述|
|---|------|---|
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

## 自定义主题

百度地图实例允许用户设置自定义配色风格以配合不同风格的主题设计。

> 主题数据格式请参考：[百度地图主题编辑器](http://developer.baidu.com/map/custom/)

## 示例

### 设置经纬度和缩放等级

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  </baidu-map>
</doc-preview>

### 开启滚轮缩放

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true">
  </baidu-map>
</doc-preview>

### 设置自定义主题

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :mapStyle="mapStyle">
  </baidu-map>
</template>
<script>
export default {
  data () {
    return {
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    }
  }
}
</script>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :mapStyle="mapStyle">
  </baidu-map>
</doc-preview>

### 设置地图类型

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" mapType="BMAP_SATELLITE_MAP">
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
    <baidu-map 
        class="map"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom">
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
     syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>经度</md-table-head>
      <md-table-head>纬度</md-table-head>
      <md-table-head>缩放</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="center.lng" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="center.lat" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="zoom" md-inline></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15,
      mapStyle: {
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      }
    }
  },
  methods: {
     syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
