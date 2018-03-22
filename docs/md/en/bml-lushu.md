# LuShu

`bml-lushu` is the component used to show the path of motion.

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|play|Boolean|true|Whether playing or not.|
|path|Array[{lng, lat}]|[]|An array of coordinate points that.|
|landmarkPois|Array[{lng, lat, html, pauseTime}]|[]|Special points displayed during the move.|
|icon|Icon||Icon of the overlay.|
|speed|Number|4000|Movement speed of the overlay.|
|autoView|Boolean|false|Automatically adjust the view by moving.|
|rotation|Boolean|false|Whether the moving object rotates with the path.|
|infoWindow|Boolean|true|Whether display the info window.|
|content|String||The content of the info window.|

## Events

|name|parameter|description|
|------|----|----|
|start|this|Triggers when the overlay start moving.|
|stop|this|Triggers when the overlay totally stopped.|
|pause|this|Triggers when the overlay paused.|

## Examples

### Restore the driving route

#### Code

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
      play: true
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

#### Preview

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
      <md-table-head>Operation</md-table-head>
      <md-table-head>Rotation</md-table-head>
      <md-table-head>Speed</md-table-head>
      <md-table-head>Content</md-table-head>
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
      content: 'My car is here.',
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