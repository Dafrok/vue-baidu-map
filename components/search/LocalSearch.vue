<template>
<div v-show="panel">
  <slot></slot>
</div>
</template>

<script>
import {createPoint, createBounds} from '../base/factory.js'
import {isPoint} from '../base/util.js'
import commonMixin from '../base/mixins/common.js'

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
    panel: {
      type: Boolean,
      default: true
    },
    forceLocal: {
      type: Boolean
    },
    customData: {
      type: Object
    },
    bounds: {
      type: Object
    },
    nearby: {
      type: Object
    },
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
        const {originInstance, search} = this
        originInstance.setLocation(val || this.map)
        search()
      },
      deep: true
    },
    keyword () {
      this.search()
    },
    bounds: {
      handler (val) {
        const {searchInBounds} = this
        searchInBounds(val)
      },
      deep: true
    },
    nearby: {
      handler (val) {
        const {searchNearby} = this
        searchNearby(val)
      },
      deep: true
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
    // panel () {
    //   this.reload()
    // },
    pageCapacity (val) {
      this.originInstance && this.originInstance.setPageCapacity(val)
    },
    autoViewport (val) {
      this.originInstance && (val ? this.originInstance.enableAutoViewport() : this.originInstance.disableAutoViewport())
    },
    selectFirstResult (val) {
      this.originInstance && (val ? this.originInstance.enableFirstResultSelection() : this.originInstance.disableFirstResultSelection())
    },
    highlightMode () {
      this.reload()
    }
  },
  methods: {
    searchNearby (nearby) {
      const {originInstance, keyword, customData, BMap} = this
      originInstance.searchNearby(keyword, createPoint(BMap, nearby.center), nearby.radius, customData)
    },
    searchInBounds (bounds) {
      const {originInstance, keyword, customData, BMap} = this
      originInstance.searchInBounds(keyword, createBounds(BMap, bounds), customData)
    },
    search () {
      const {originInstance, keyword, forceLocal, customData, nearby, bounds, searchNearby, searchInBounds} = this
      nearby ? searchNearby(nearby) : bounds ? searchInBounds(bounds) : originInstance.search(keyword, {
        forceLocal,
        customData
      })
    },
    load () {
      const instance = this
      const {map, BMap, search, pageCapacity, autoViewport, selectFirstResult, highlightMode, location, originInstance} = this
      const _location = location ? isPoint(location) ? createPoint(BMap, location) : location : map
      const route = this.originInstance = new BMap.LocalSearch(_location, {
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
          if (originInstance && originInstance !== route) {
            originInstance.clearResults()
          }
          instance.$emit('searchcomplete', e)
        },
        pageCapacity: pageCapacity,
        renderOptions: {
          map,
          // panel: panel && this.$el,
          panel: this.$el,
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
