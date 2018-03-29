<template>
<div v-show="panel">
  <slot></slot>
</div>
</template>

<script>
import {createPoint} from '../base/factory.js'
import {isPoint, getPosition} from '../base/util.js'
import commonMixin from '../base/mixins/common.js'

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
        const {originInstance, end, startCity, endCity, waypoints, BMap, getWaypoints} = this
        originInstance.search(getPosition(BMap, val), getPosition(BMap, end), {
          startCity,
          endCity,
          waypoints: getWaypoints(waypoints)
        })
      },
      deep: true
    },
    end: {
      handler (val) {
        const {originInstance, start, startCity, endCity, waypoints, BMap, getWaypoints} = this
        originInstance.search(getPosition(BMap, start), getPosition(BMap, val), {
          startCity,
          endCity,
          waypoints: getWaypoints(waypoints)
        })
      },
      deep: true
    },
    startCity (val) {
      const {originInstance, start, end, endCity, waypoints, getWaypoints} = this
      originInstance.search(start, end, {
        val,
        endCity,
        waypoints: getWaypoints(waypoints)
      })
    },
    endCity (val) {
      const {originInstance, start, end, startCity, waypoints, getWaypoints} = this
      originInstance.search(start, end, {
        startCity,
        val,
        waypoints: getWaypoints(waypoints)
      })
    },
    waypoints: {
      handler (val) {
        const {originInstance, start, end, startCity, endCity, getWaypoints} = this
        originInstance.search(start, end, {
          startCity,
          endCity,
          waypoints: getWaypoints(val)
        })
      },
      deep: true
    },
    panel () {
      this.reload()
    },
    policy (val) {
      this.reload()
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
      const {originInstance, getWaypoints} = this
      originInstance.search(start, end, {
        startCity,
        endCity,
        waypoints: getWaypoints(waypoints)
      })
    },
    getWaypoints (waypoints) {
      const {BMap} = this
      if (waypoints) {
        return waypoints.map(position => getPosition(BMap, position))
      }
    },
    load () {
      const instance = this
      const {map, BMap, location, policy, selectFirstResult, autoViewport, highlightMode, search, start, end, startCity, endCity, waypoints, originInstance, getWaypoints} = this
      const _location = location ? isPoint(location) ? createPoint(BMap, location) : location : map
      const route = this.originInstance = new BMap.DrivingRoute(_location, {
        renderOptions: {
          map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
        policy: global[policy],
        onSearchComplete (e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults()
          }
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
      search(getPosition(BMap, start), getPosition(BMap, end), {
        startCity,
        endCity,
        waypoints: getWaypoints(waypoints)
      })
    }
  }
}
</script>
