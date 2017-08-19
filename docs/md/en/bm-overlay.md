# Custom Overlay

`BmOverlay` is a highly customized component, it redraws with the `draw` event. The recommended usage is to wrap the `BmOverlay` component with the same redraw logic.

## Instance Properties

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|pane|String||The [pane](http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b1) which contains the overlay. Allow `floatPane` , `markerMouseTarget` , `floatShadow` , `labelPane` , `markerPane` , `markerShadow` , `mapPane` for 7 legal values.|

## Events

|事件名|参数|描述|
|------|:---:|----|
|initialize|event{BMap, map, el, overlay}|Triggers when the overlay is initialized.|
|draw|event{BMap, map, el, overlay}|Triggers when the map changes.|

## Examples

### Use without wrapping

#### Code

```html
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
  <bm-overlay
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
      el.style.left = pixel.x - 70 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 120px;
  height: 20px;
  line-height: 20px;
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

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-overlay
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
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw">
    <div v-text="text"></div>
  </bm-overlay>
</template>

<script>
export default {
  props: ['text', 'position', 'active'],
  methods: {
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 70 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 120px;
  height: 20px;
  line-height: 20px;
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

##### Use MyOverlay Component

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <my-overlay
      :position="{lng: 116.404, lat: 39.915}"
      text="天安门上太阳升"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
  </baidu-map>
</template>

<script>
import MyOverlay from '@/MyOverlay.vue'
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
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <my-overlay
      :position="{lng: 116.404, lat: 39.915}"
      text="天安门上太阳升"
      :active="active"
      @mouseover.native="active = true"
      @mouseleave.native="active = false">
    </my-overlay>
  </baidu-map>
</doc-preview>

<script>
import Vue from 'vue'

const MyOverlay = Vue.extend({
  render (h) {
    return h('bm-overlay', {
      class: {
        sample: true,
        active: this.active
      },
      props: {
        pane: 'labelPane'
      },
      on: {
        draw: this.draw
      }
    }, [
      h('div', this.text)
    ])
  },
  props: ['text', 'position', 'active'],
  methods: {
    draw ({el, BMap, map}) {
      const {lng, lat} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 70 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
})

export default {
  data () {
    return {
      active: false
    }
  },
  components: {
    MyOverlay
  },
  methods: {
    draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
      el.style.left = pixel.x - 70 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style lang="stylus">
.sample
  width 120px
  height 20px
  line-height 20px
  background rgba(0, 0, 0, .5)
  overflow hidden
  box-shadow 0 0 5px black
  color white
  text-align center
  padding 10px
  position absolute
  &.active
    background rgba(0, 0, 0, .75)
    color white
</style>