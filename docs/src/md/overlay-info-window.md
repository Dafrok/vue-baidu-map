<template lang="markdown">

# 信息窗体

`MapOverlayInfoWindow`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|show|Boolean|false|信息窗体是否开启|
|position|Point||信息窗体所指坐标|
|width|Number||信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整|
|height|Number||信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整|
|maxWidth|Number||信息窗最大化时的宽度，单位像素。取值范围：220 - 730|
|offset|Size||信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置|
|title|String||信息窗标题文字，支持HTML内容|
|autoPan|Boolean|true|是否开启信息窗口打开时地图自动移动|
|closeOnClick|Boolean|true|是否开启点击地图关闭信息窗口|
|message|String|自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字|
|maximize|Boolean|false|允许最大化|

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

### 在地图中添加一个信息窗体

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
      <map-overlay-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <p v-text="infoWindow.contents"></p>
      </map-overlay-info-window>
    </map-view>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    }
  }
}
</script>
```

#### 预览

<div class="columns">
  <div class="column is-3">
    <div class="box">
      <div class="control is-horizontal">
        <div class="control">
          <textarea class="textarea" placeholder="内容" v-model.number="infoWindow.contents"/>
        </div>
      </div>
      <div class="control is-horizontal">
        <p class="control">
          <button class="button is-primary" @click="infoWindow.show = !infoWindow.show">显示 / 隐藏信息窗体</button>
        </p>
      </div>
    </div>
  </div>
  <div class="column is-9">
    <baidu-map>
      <map-view class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
        <map-overlay-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
          <p v-text="infoWindow.contents"></p>
        </map-overlay-info-window>
      </map-view>
    </baidu-map>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    }
  }
}
</script>