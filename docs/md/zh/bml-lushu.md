# 路书

`bml-lushu` 是用来还原行进轨迹的组件。

## 属性

|属性名|类型|默认值|描述|
|------|-----|------|----|
|play|Boolean|true|是否行进|
|path|Array[{lng, lat}]|[]|构成路线的坐标点数组|
|landmarkPois|Array[{lng, lat, html, pauseTime}]|[]|要在覆盖物移动过程中显示的特殊点|
|icon|Icon||覆盖物的图标|
|speed|Number|4000|覆盖物移动速度|
|autoView|Boolean|false|是否自动调整路线视野|
|rotation|Boolean|false|移动物体是否随路径旋转朝向|
|infoWindow|Boolean|true|是否开启移动物体上的信息窗体|
|content|String||信息窗体中的内容，无内容则不显示信息窗体|

## 事件

|事件名|参数|描述|
|------|----|----|
|start|this|开始移动|
|stop|this|停止本次移动|
|pause|this|暂停移动|

## 示例

### 还原天安门到百度大厦的驾车路径

#### 代码

```html
<template>
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="11">
  <bm-driving start="天安门" end="百度大厦" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving>
  <bml-lushu
    @stop="reset"
    :path="path"
    :icon="icon"
    :play="play"
    :rotation="true">
  </bml-lushu>
</baidu-map>
</template>

<script>
import {BmlLushu} from 'vue-baidu-map'
export default {
  components: {
    BmlLushu
  },
  data () {
    return {
      play: true,
      path: [],
      icon: {
        url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
        size: {width: 52, height: 26},
        opts: {anchor: {width: 27, height:13}}
      }
    }
  },
  methods: {
    reset () {
      this.play = false
    },
    handleSearchComplete (res) {
      this.path = res.getPlan(0).getRoute(0).getPath()
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="11">
    <bm-driving start="天安门" end="百度大厦" @searchcomplete="handleSearchComplete" :panel="false" :autoViewport="true"></bm-driving>
    <bml-lushu
      @start="changeBtnText('pause')"
      @stop="changeBtnText('play_arrow')"
      @pause="changeBtnText('play_arrow')"
      :path="path"
      :rotation="rotation"
      :content="content"
      :infoWindow="true"
      :speed="speed"
      :icon="icon"
      :play="play">
    </bml-lushu>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>操作</md-table-head>
      <md-table-head>旋转</md-table-head>
      <md-table-head>行进速度</md-table-head>
      <md-table-head>窗体内容</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-button class="md-icon-button md-primary" @click="toggle">
            <md-icon>{{btnText}}</md-icon>
          </md-button>
        </md-table-cell>
        <md-table-cell>
          <md-switch v-model="rotation">
          </md-switch>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model.number="speed">
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="content">
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</doc-preview>

<script>
import BmlLushu from '../../../components/extra/Lushu.vue'
export default {
  components: {
    BmlLushu
  },
  data () {
    return {
      btnText: 'play_arrow',
      path: [],
      rotation: true,
      play: false,
      content: '一言不合就开车',
      speed: 5000,
      icon: {
        url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
        size: {
          width: 52,
          height: 26
        },
        opts: {
          anchor: {
            width: 27,
            height:13
          }
        }
      }
    }
  },
  methods: {
    changeBtnText (val) {
      this.btnText = val
      if (val === 'play_arrow') {
        this.play = false
      }
    },
    toggle () {
      this.play = !this.play
    },
    handleSearchComplete (res) {
      this.path = res.getPlan(0).getRoute(0).getPath()
    }
  }
}
</script>