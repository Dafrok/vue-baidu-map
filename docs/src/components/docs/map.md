# 地图

## 实例属性

|属性名|类型|默认值|描述|
|------|:----:|:---:|---|
|ak|String|undefined|于[百度地图开发者平台](http://lbsyun.baidu.com/apiconsole/key)申请的密钥，该属性仅在初始化时生效，为必填项。|
|longitude|Number|undefined|经度|
|latitude|Number|undefined|纬度|
|zoom|Number|undefined|缩放级别|
|min-zoom|Number|undefined|最小缩放级别|
|max-zoom|Number|undefined|最大缩放级别|
|max-zoom|Number|undefined|最大缩放级别|
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
  <baidu-map ak="YOUR_APP_KEY" :longitude="116.404" :latitude="39.915" :zoom="15">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :longitude="116.404" :latitude="39.915" :zoom="15" class="map">
</baidu-map>

### 开启滚轮缩放

#### 代码

```vue
<template>
  <baidu-map ak="YOUR_APP_KEY" :scroll-wheel-zoom="true" :longitude="116.404" :latitude="39.915" :zoom="15">
  </baidu-map>
</template>
```

#### 预览
<baidu-map ak="C6bKwIcQvm2gPPUIPjpSQpVD" :scroll-wheel-zoom="true" :longitude="116.404" :latitude="39.915" :zoom="15" class="map">
</baidu-map>