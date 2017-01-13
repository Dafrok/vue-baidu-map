# 基础地图

## 实例属性
|属性名|类型|默认值|描述|
|------|:----:|:---:|---|
|ak|String|undefined|于[百度地图开发者平台](http://lbsyun.baidu.com/apiconsole/key)申请的密钥，该属性仅在初始化时生效，为必填项。|
|position|Object|undefined|定位|
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

## 示例

### 设置经纬度和缩放等级

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}" class="map">
</baidu-map>

### 开启滚轮缩放

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY" :scroll-wheel-zoom="true" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :scroll-wheel-zoom="true" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}" class="map">
</baidu-map>

### 设置缩放等级限制

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY" :position="{longitude: 116.404, latitude: 39.915}" :scroll-wheel-zoom="true" :min-zoom="5" :max-zoom="10">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :scroll-wheel-zoom="true" :position="{longitude: 116.404, latitude: 39.915}" :min-zoom="5" :max-zoom="10" class="map">
</baidu-map>

### 设置地图类型

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}" mapType="BMAP_SATELLITE_MAP">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :position="{longitude: 116.404, latitude: 39.915, zoom: 15}" mapType="BMAP_SATELLITE_MAP" class="map">
</baidu-map>

### 交互
```javascript
<template>
  <div>
    <input v-model="position.longitude">
    <input v-model="position.latitude">
    <input v-model="position.zoom">
    <baidu-map class="map" :scroll-wheel-zoom="true" :position="position" ak="C6bKwIcQvm2gPPUIPjpSQpVD" @change="syncPosition">
    </baidu-map>
  <div>
</template>

<script>
export default {
  data () {
    return {
      position: {
        longitude: 116.404,
        latitude: 39.915,
        zoom: 15
      }
    }
  },
  methods: {
    syncPosition (position) {
      this.position = position
    }
  }
}
</script>
```
<demo-map />