<template lang="pug">
div
</template>

<script>
import {createPoint} from '@/base/factory.js'
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-local-search',
  mixins: [commonMixin('search')],
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: [Array, String]
    },
    resultPanel: {
      type: Boolean,
      default: true
    },
    forceLocal: {
      type: Boolean
    },
    customData: {
      type: Object
    },
    // bounds: {
    //   type: Array
    // },
    // nearby: {
    // },
    // page: {
    //   type: Number
    // },
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
        console.log(this.map)
        this.originInstance.setLocation(val || this.map)
      },
      deep: true
    },
    keyword (val) {
      const {originInstance, forceLocal, customData} = this
      originInstance && originInstance.search(val, {
        forceLocal,
        customData
      })
    },
    forceLocal () {
      this.reload()
    },
    customData: {
      deep: true,
      handler () {
        this.reload()
      }
    },
    pageCapacity (val) {
      this.originInstance && this.originInstance.setPageCapacity(val)
    },
    autoViewport (val) {
      this.originInstance && (val ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport())
    },
    selectFirstResult (val) {
      this.originInstance && (val ? this.originInstance.enableFirstResultSelection() : this.originInstance.disableFirstResultSelection())
    }
  },
  methods: {
    search () {
      const {originInstance, keyword, forceLocal, customData} = this
      originInstance.search(keyword, {
        forceLocal,
        customData
      })
    },
    load () {
      const instance = this
      const {map, BMap} = this.$parent
      const {search, pageCapacity, autoViewport, selectFirstResult, highlightMode, location, resultPanel} = this
      const _location = (location => {
        if (location.lng && location.lat) {
          return createPoint(BMap, location)
        } else if (typeof location === 'string') {
          return location
        } else {
          return map
        }
      })(location)
      this.originInstance = new BMap.LocalSearch(_location || map, {
        onMarkersSet (e) {
          instance.$emit('markersset', e)
        },
        onInfoHtmlSet (e) {
          instance.$emit('infohtmlset', e)
        },
        onResultsHtmlSet (e) {
          instance.$emit('resultshtmlset', e)
        },
        onSearchComplete (e) {
          instance.$emit('searchcomplete', e)
        },
        pageCapacity: pageCapacity,
        renderOptions: {
          map,
          panel: resultPanel && this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        }
      })
      search()
    }
  }
}
</script>
