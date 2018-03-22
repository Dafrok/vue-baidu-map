# 自定义覆盖物

`BmOverlay` 自定义覆盖物组件是一个高度订制化的组件，通过 `draw` 事件进行覆盖物的重绘。推荐的使用方法是将重绘逻辑相同的 `BmOverlay` 进行二次封装。自定义覆盖物仅在地图发生变化时触发 `draw` 方法重绘覆盖物视图，若需要定制数据视图同步策略，请手动触发 `BmOverlay` 的 `reload` 实例方法。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|pane|String||自定义覆盖物所在[容器](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b1)。包含 `floatPane`、`markerMouseTarget`、`floatShadow`、`labelPane`、`markerPane`、`markerShadow`、`mapPane` 共 7 种合法值|

## 事件

|事件名|参数|描述|
|------|-----|----|
|initialize|event{BMap, map, el, overlay}|覆盖物初始化时触发此事件|
|draw|event{BMap, map, el, overlay}|地图发生改变时触发此事件|

## 示例

### 单独使用

#### 代码

```html
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  <bm-overlay
    pane="labelPane"
    :class="{sample: true, active}"
    @draw="draw"
    @mouseover.native="active = true"
    @mouseleave.native="active = false">
    <div>我爱北京天安门</div>
  </bm-overlay>
</baidu-map>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
}
.sample.active {
  background: rgba(0,0,0,0.75);
  color: #fff;
}
</style>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-overlay
      pane="labelPane"
      :class="{sample: true, active}"
      @draw="draw"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
      <div>我爱北京天安门</div>
    </bm-overlay>
  </baidu-map>
</doc-preview>

### 二次封装用法

#### 代码

##### 封装组件 MyOverlay

```html
<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw">
    <div v-text="text" @click="handleClick"></div>
  </bm-overlay>
</template>

<script>
export default {
  props: ['text', 'position', 'active'],
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 120px;
  height: 40px;
  line-height: 40px;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
}
.sample.active {
  background: rgba(0,0,0,0.75);
  color: #fff;
}
</style>
```

##### 调用 MyOverlay 组件

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <my-overlay
      :position="{lng: 116.404, lat: 39.915}"
      text="点击我"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
  </baidu-map>
</template>

<script>
import MyOverlay from '../../components/MyOverlay.vue'
export default {
  data () {
    return {
      active: false
    }
  }
  components: {
    MyOverlay
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-view class="map"></bm-view>
    <my-overlay
      :position="{lng: position.lng, lat: position.lat}"
      text="点击我"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
    <md-table>
      <md-table-header>
        <md-table-head>覆盖物经度</md-table-head>
        <md-table-head>覆盖物纬度</md-table-head>
      </md-table-header>
      <md-table-body>
        <md-table-row>
          <md-table-cell>
            <md-input-container>
              <md-input v-model="position.lng"></md-input>
            </md-input-container>
          </md-table-cell>
          <md-table-cell>
            <md-input-container>
              <md-input v-model="position.lat"></md-input>
            </md-input-container>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </baidu-map>
</doc-preview>

<script>
import MyOverlay from 'docs/components/MyOverlay.vue'
export default {
  data () {
    return {
      active: false,
      position: {
        lng: 116.404,
        lat: 39.915
      }
    }
  },
  components: {
    MyOverlay
  },
  methods: {
    draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style lang="stylus">
.sample
  width 120px
  height 40px
  background rgba(0, 0, 0, .5)
  overflow hidden
  color white
  text-align center
  padding 10px
  position absolute
  &.active
    background rgba(0, 0, 0, .75)
    color white
</style>