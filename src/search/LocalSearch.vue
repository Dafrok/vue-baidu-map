<template lang="pug">
div
</template>

<script>
import {createBounds} from '../base/factory.js'
export default {
  name: 'map-local-search',
  props: {
    location: {
      type: [Object, String]
    },
    keyword: {
      type: [Array, String]
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
    location () {
      this.reloadLocalSearch()
    },
    keyword () {
      this.local && this.search()
    },
    forceLocal () {
      this.reloadLocalSearch()
    },
    customData: {
      deep: true,
      handler () {
        this.reloadLocalSearch()
      }
    },
    pageCapacity (val) {
      this.local && this.local.setPageCapacity(val)
    },
    autoViewport (val) {
      this.local && (val ? this.local.enableAutoViewport() : this.local.disableAutoViewport())
    },
    selectFirstResult (val) {
      this.local && (val ? this.local.enableFirstResultSelection() : this.local.disableFirstResultSelection())
    }
  },
  methods: {
    search () {
      const {local, keyword, option, forceLocal, customData} = this
      local.search(keyword, {
        forceLocal,
        customData
      })
    },
    reloadLocalSearch () {
      const {map} = this.$parent
      const {addLocalSearch} = this
      map ? addLocalSearch() : this.$parent.$on('ready', addLocalSearch)
    },
    addLocalSearch () {
      const instance = this
      const {map, BMap} = this.$parent
      const {search, pageCapacity, autoViewport, selectFirstResult, highlightMode, location} = this
      const _location = typeof location === 'object' ? createBounds(location) : location
      const local = this.local = new BMap.LocalSearch(_location || map, {
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
          panel: this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
      })
      search()
    }
  },
  mounted () {
    this.reloadLocalSearch()
  }
}
</script>