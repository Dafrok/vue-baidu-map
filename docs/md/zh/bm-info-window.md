<template lang="markdown">

# 信息窗体

`BmInfoWindow` 信息窗体使用 slot 模式渲染子节点。如果您的浏览器支持 `MutationObserver` 方法，在您更新子节点的时候会自动调整信息窗体的尺寸。如果不支持该方法，您需要在更新子节点后手动调用当前 `BmInfoWindow` 组件实例的 `redraw()` 方法更新视图。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|show|Boolean|false|信息窗体是否开启|
|position|Point||信息窗体所指坐标|
|width|Number||信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整|
|height|Number||信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整|
|maxWidth|Number||信息窗最大化时的宽度，单位像素。取值范围：220 - 730|
|offset|Size||信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置|
|title|String||信息窗标题文字，支持HTML内容|
|autoPan|Boolean|true|是否开启信息窗口打开时地图自动移动|
|closeOnClick|Boolean|true|是否开启点击地图关闭信息窗口|
|message|String||自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字|
|maximize|Boolean|false|允许最大化|

## 事件

|事件名|参数|描述|
|------|----|----|
|close|event{type, target, point}|信息窗口被关闭时触发此事件|
|open|event{type, target, point}|信息窗口被打开时触发此事件|
|maximize|event{type, target}|信息窗口最大化后触发此事件|
|restore|event{type, target}|信息窗口还原时触发此事件|
|clickclose|event{type, target}|点击信息窗口的关闭按钮时触发此事件|

## 示例

### 在地图中添加一个信息窗体

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
      <p v-text="infoWindow.contents"></p>
      <button @click="clear">Clear</button>
    </bm-info-window>
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
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
}
</script>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
      <p v-text="infoWindow.contents"></p>
      <button @click="clear">Clear</button>
    </bm-info-window>
  </baidu-map>
  <md-table>
    <md-table-header>
      <md-table-head>开关</md-table-head>
      <md-table-head>内容</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-switch v-model="infoWindow.show" class="md-primary"></md-switch>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-textarea v-model="infoWindow.contents"></md-textarea>
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
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
}
</script>
