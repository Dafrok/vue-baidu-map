<template lang="md">

# 海量点

`BmPointCollection`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|points|Array[Point]|[]|地图上展示的点坐标集合|
|shape|[ShapeType](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b22)|BMAP_POINT_SHAPE_CIRCLE|坐标点形状|
|size|[SizeType](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b23)|BMAP_POINT_SIZE_NORMAL|坐标点尺寸|
|color|String||坐标点颜色|

## 事件

|事件名|参数|描述|
|------|----|----|
|click|event{currentTarget, point, returnValue, target, type}|点击坐标点后会触发此事件|
|mouseout|event{currentTarget, point, returnValue, target, type}|鼠标离开坐标点时触发此事件|
|mouseover|event{currentTarget, point, returnValue, target, type}|当鼠标进入坐标点区域时会触发此事件|

## 示例

### 添加 1000 个随机点

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 105.000, lat: 38.000}" :zoom="4">
    <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      points: []
    }
  },
  methods: {
    clickHandler (e) {
      alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" @ready="addPoints" :center="{lng: 105.000, lat: 38.000}" :zoom="4">
    <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>
  </baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      points: []
    }
  },
  methods: {
    clickHandler (e) {
      alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
    }
  }
}
</script>