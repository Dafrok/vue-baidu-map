<template lang="pug">
div
</template>

<script>
import {createPoint} from '@/base/factory.js'
import {isPoint} from '@/base/util.js'
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-transit',
  mixins: [commonMixin('search')],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    resultPanel: {
      type: Boolean,
      default: true
    },
    policy: {
      type: String
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
    start: {
      handler (val) {
        const {originInstance, end, BMap} = this
        originInstance.search(isPoint(val) ? createPoint(BMap, val) : val, end)
      },
      deep: true
    },
    end: {
      handler (val) {
        const {originInstance, start, BMap} = this
        originInstance.search(start, isPoint(val) ? createPoint(BMap, val) : val)
      },
      deep: true
    },
    resultPanel () {
      this.reload()
    },
    policy (val) {
      this.originInstance.setPolicy(global[val])
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
    search (start, end) {
      const {originInstance} = this
      originInstance.search(start, end)
    },
    load () {
      const instance = this
      const {map, BMap} = this.$parent
      const {location, policy, pageCapacity, resultPanel, selectFirstResult, autoViewport, highlightMode, search, start, end} = this
      const _location = location ? isPoint(location) ? createPoint(BMap, location) : location : map
      this.originInstance = new BMap.TransitRoute(_location, {
        renderOptions: {
          map,
          panel: resultPanel && this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
        policy: policy,
        pageCapacity: pageCapacity,
        onSearchComplete (e) {
          instance.$emit('searchcomplete', e)
        },
        onMarkersSet (e) {
          instance.$emit('markersset', e)
        },
        onInfoHtmlSet (e) {
          instance.$emit('infohtmlset', e)
        },
        onPolylinesSet (e) {
          instance.$emit('polylinesset', e)
        },
        onResultsHtmlSet (e) {
          instance.$emit('resultshtmlset', e)
        }
      })
      search(isPoint(start) ? createPoint(BMap, start) : start, isPoint(end) ? createPoint(BMap, end) : end)
    }
  }
}
</script>
