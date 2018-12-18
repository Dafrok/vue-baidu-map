<template lang="md">

# 行政区划

`BmBoundary` 组件继承于 `bm-polygon` 组件，视图由 `bm-polygon` 组件进行渲染。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|name|String||行政区划名称|
|strokeColor|String||折线颜色|
|strokeWeight|Number||折线的宽度，以像素为单位|
|strokeOpacity|Number||折线的透明度，取值范围0 - 1|
|strokeStyle|String|'solid'|折线的样式，solid或dashed|
|fillColor|String||填充颜色。当参数为空时，折线覆盖物将没有填充效果|
|fillOpacity|Number||填充的透明度，取值范围0 - 1|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|clicking|Boolean|true|是否响应点击事件|

## 事件

|事件名|参数|描述|
|------|----|----|
|click|event{type, target, point, pixel}|点击行政区划后会触发此事件|
|dblclick|event{type, target, point, pixel}|双击行政区划后会触发此事件|
|mousedown|event{type, target, point, pixel}|鼠标在行政区划上按下触发此事件|
|mouseup|event{type, target, point, pixel}|鼠标在行政区划释放触发此事件|
|mouseout|event{type, target, point, pixel}|鼠标离开行政区划时触发此事件|
|mouseover|event{type, target, point, pixel}|当鼠标进入行政区划时会触发此事件|
|remove|event{type, target}|移出行政区划时触发|

## 示例

### 在地图中添加北京市海淀区行政区划范围

#### 代码

```html
<baidu-map class="map" :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-boundary name="北京市海淀区" :strokeWeight="2" strokeColor="blue"></bm-boundary>
</baidu-map>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 109.49384, lat: 26.84204}" :zoom="11">
    <bm-boundary :name="name" :strokeWeight="2" strokeColor="blue"></bm-boundary>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>行政区划名</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="name" md-inline></md-input>
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
      name: '湖南省'
    }
  }
}
</script>