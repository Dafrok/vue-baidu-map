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
        this.local.setLocation(val || this.map)
      },
      deep: true
    },
    keyword (val) {
      const {local, forceLocal, customData} = this
      local && local.search(val, {
        forceLocal,
        customData
      })
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
      const {local, keyword, forceLocal, customData} = this
      local.search(keyword, {
        forceLocal,
        customData
      })
    },
    reload () {
      const {map} = this.$parent
      const {addLocalSearch} = this
      map ? addLocalSearch() : this.$parent.$on('ready', addLocalSearch)
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
      this.local = new BMap.LocalSearch(_location || map, {
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
