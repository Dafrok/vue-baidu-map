<template>
  <div v-if="paths.length">
    <bm-polygon
      v-for="(path, index) of paths"
      :key="index"
      :path="path"
      :stroke-color="strokeColor"
      :stroke-weight="strokeWeight"
      :stroke-opacity="strokeOpacity"
      :stroke-style="strokeStyle"
      :fill-opacity="fillOpacity"
      :fill-color="fillColor"
      :mass-clear="massClear"
      :clicking="clicking"
      @click="$emit('click', $event)"
      @dblclick="$emit('dblclick', $event)"
      @mousedown="$emit('mousedown', $event)"
      @mouseup="$emit('mouseup', $event)"
      @mouseout="$emit('mouseout', $event)"
      @mouseover="$emit('mouseover', $event)"
      @remove="$emit('remove', $event)"
    />
  </div>
</template>

<script>
import BmPolygon from '../overlays/Polygon.vue'
import commonMixin from '../base/mixins/common.js'
// import abstractMixin from '../base/mixins/abstract.js'

export default {
  mixins: [
    commonMixin('abstract')
  ],
  props: ['name', 'strokeColor', 'strokeWeight', 'strokeOpacity', 'strokeStyle', 'fillColor', 'fillOpacity', 'massClear', 'clicking'],
  data () {
    return {
      paths: []
    }
  },
  components: {
    BmPolygon
  },
  watch: {
    name () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, name} = this
      const bd = new BMap.Boundary()
      bd.get(name, data => {
        this.paths = data.boundaries.map(boundary => (boundary || []).split(';')
           .map(point => (([lng, lat]) => ({lng, lat}))(point.split(',').map(p => +p))))
      })
    }
  }
}
</script>
