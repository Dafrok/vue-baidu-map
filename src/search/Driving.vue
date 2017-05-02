<template lang="pug">
div(v-show="panel")
</template>

<script>
import {createPoint} from '@/base/factory.js'
import {isPoint} from '@/base/util.js'
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-driving',
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
    startCity: {
      type: [String, Number]
    },
    endCity: {
      type: [String, Number]
    },
    waypoints: {
      type: Array
    },
    policy: {
      type: String
    },
    panel: {
      type: Boolean,
      default: true
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
        const {originInstance, end, startCity, endCity, waypoints, BMap} = this
        originInstance.search(isPoint(val) ? createPoint(BMap, val) : val, end, {
          startCity,
          endCity,
          waypoints
        })
      },
      deep: true
    },
    end: {
      handler (val) {
        const {originInstance, start, startCity, endCity, waypoints, BMap} = this
        originInstance.search(start, isPoint(val) ? createPoint(BMap, val) : val, {
          startCity,
          endCity,
          waypoints
        })
      },
      deep: true
    },
    startCity (val) {
      const {originInstance, start, end, endCity, waypoints} = this
      originInstance.search(start, end, {
        val,
        endCity,
        waypoints
      })
    },
    endCity (val) {
      const {originInstance, start, end, startCity, waypoints} = this
      originInstance.search(start, end, {
        startCity,
        val,
        waypoints
      })
    },
    waypoints: {
      handler (val) {
        const {originInstance, start, end, startCity, endCity} = this
        originInstance.search(start, end, {
          startCity,
          endCity,
          val
        })
      },
      deep: true
    },
    // panel () {
    //   this.reload()
    // },
    policy (val) {
      this.originInstance.setPolicy(global[val])
    },
    autoViewport () {
      this.reload()
    },
    selectFirstResult () {
      this.reload()
    },
    highlightMode () {
      this.reload()
    }
  },
  methods: {
    search (start, end, {startCity, endCity, waypoints}) {
      const {originInstance} = this
      originInstance.search(start, end, {
        startCity,
        endCity,
        waypoints
      })
    },
    load () {
      const instance = this
      const {map, BMap, location, policy, selectFirstResult, autoViewport, highlightMode, search, start, end, startCity, endCity, waypoints} = this
      const _location = location ? isPoint(location) ? createPoint(BMap, location) : location : map
      this.originInstance = new BMap.DrivingRoute(_location, {
        renderOptions: {
          map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
        policy: policy,
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
      search(isPoint(start) ? createPoint(BMap, start) : start, isPoint(end) ? createPoint(BMap, end) : end, {
        startCity,
        endCity,
        waypoints
      })
    }
  }
}
</script>
