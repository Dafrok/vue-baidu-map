<template>
<div v-show="panel">
</div>
</template>

<script>
import {createPoint} from '../base/factory.js'
import {isPoint} from '../base/util.js'
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bm-bus',
  mixins: [commonMixin('search')],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: String
    },
    panel: {
      type: Boolean,
      default: true
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler (val) {
        const {originInstance, map} = this
        originInstance.setLocation(val || map)
      },
      deep: true
    },
    keyword (val) {
      this.search(val)
    },
    panel () {
      this.reload()
    },
    autoViewport (val) {
      this.reload()
    },
    selectFirstResult (val) {
      this.reload()
    }
  },
  methods: {
    search (keyword) {
      const {originInstance} = this
      originInstance.getBusList(keyword)
    },
    load () {
      const instance = this
      const {location, selectFirstResult, autoViewport, highlightMode, keyword, search, BMap, map, originInstance} = this
      const _location = location ? isPoint(location) ? createPoint(BMap, location) : location : map
      const route = this.originInstance = new BMap.BusLineSearch(_location, {
        renderOptions: {
          map,
          panel: this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
        onGetBusListComplete (e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults()
          }
          instance.$emit('getbuslistcomplete', e)
        },
        onGetBusLineComplete (e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults()
          }
          instance.$emit('getbuslinecomplete', e)
        },
        onBusListHtmlSet (e) {
          instance.$emit('buslisthtmlset', e)
        },
        onBusLineHtmlSet (e) {
          instance.$emit('buslinehtmlset', e)
        },
        onMarkersSet (e) {
          instance.$emit('markersset', e)
        },
        onPolylinesSet (e) {
          instance.$emit('polylinesset', e)
        }
      })
      search(keyword)
    }
  }
}
</script>
