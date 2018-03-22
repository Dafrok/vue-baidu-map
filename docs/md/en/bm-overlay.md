# Custom Overlay

`BmOverlay` is a highly customized component, it redraws with the `draw` event. The recommended usage is to wrap the `BmOverlay` component with the same redraw logic. The custom overlay triggers the `draw` method to redraw only if the map changes. Manually excute the` reload` instance method of `BmOverlay` if needed.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|pane|String||The [pane](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b1) which contains the overlay. Allow `floatPane` , `markerMouseTarget` , `floatShadow` , `labelPane` , `markerPane` , `markerShadow` , `mapPane` for 7 legal values.|

## Events

|name|parameter|description|
|------|-----|----|
|initialize|event{BMap, map, el, overlay}|Triggers when the overlay is initialized.|
|draw|event{BMap, map, el, overlay}|Triggers when the map changes.|

## Examples

### Use without wrapping

#### Code

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
  background: rgba(0,0,0,0.5);
  overflow: hidden;
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

#### Preview

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

### Use with wrapping

#### Code

##### Wrap BmOverlay as MyOverlay

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
  background: rgba(0,0,0,0.5);
  overflow: hidden;
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

##### Use MyOverlay Component

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <my-overlay
      :position="{lng: 116.404, lat: 39.915}"
      text="Click Me"
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
  },
  components: {
    MyOverlay
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-view class="map"></bm-view>
    <my-overlay
      :position="{lng: position.lng, lat: position.lat}"
      text="Click Me"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
    <md-table>
      <md-table-header>
        <md-table-head>Overlay Longitude</md-table-head>
        <md-table-head>Overlay Latitude</md-table-head>
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