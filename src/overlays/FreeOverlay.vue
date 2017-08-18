<style scoped>
  .free-container{
    /*height: 18px;*/
    /*width: 20px;*/
    /*background: #EE5D5B;*/
    position: absolute;
    transform: translate(-50%, -50%);
  }
</style>
<template>
  <div @click="clickDiv" class="free-container" ref="freeOverlay">
    <slot></slot>
  </div>
</template>

<script>
  import commonMixin from '../base/mixins/common.js'
  import bindEvents from '../base/bindEvent.js'
  import { createPoint, createSize } from '../base/factory.js'

  export default {
    name: 'bm-info-window',
    mixins: [commonMixin('overlay')],
    props: {
      position: {
        type: Object
      }
    },
    methods: {
      clickDiv () {
          this.$emit('click')
      },
      redraw () {
        this.originInstance.redraw()
      },
      load (BMap, map) {
        window.BMap = BMap
        let ComplexCustomOverlay = (point) => {
          this._point = point
        }
        ComplexCustomOverlay.prototype = new BMap.Overlay()
//        this.$nextTick(() => {
//          console.log('next trick')
//        })
        ComplexCustomOverlay.prototype.initialize = map => {
          let div = this.$refs.freeOverlay
          this._div = div
          this._map = map
          map.getPanes().labelPane.appendChild(div)
          return div
        }
        ComplexCustomOverlay.prototype.draw = () => {
          let map = this._map
          let pixel = map.pointToOverlayPixel(this._point)
          this._div.style.left = pixel.x +'px'
          this._div.style.top = pixel.y + 'px'
        }
//        bindEvents.call(this, ComplexCustomOverlay.prototype)
        let myCompOverylay = new ComplexCustomOverlay(new BMap.Point(this.position.lng, this.position.lat))
        map.addOverlay(myCompOverylay)
      },
    },
    mounted: function () {
    }
  }
</script>
