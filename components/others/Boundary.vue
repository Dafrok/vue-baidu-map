<script>
import BmPolygon from '../overlays/Polygon.vue'
import commonMixin from '../base/mixins/common.js'
import abstractMixin from '../base/mixins/abstract.js'

export default {
  abstract: true,
  mixins: [commonMixin('abstract'), abstractMixin({
    component: 'bm-polygon',
    props: ['path', 'strokeColor', 'strokeWeight', 'strokeOpacity', 'strokeStyle', 'fillColor', 'fillOpacity', 'massClear', 'clicking'],
    extraProps: ['name'],
    exceptProps: ['path'],
    events: ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove']
  })],
  data () {
    return {
      path: []
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
        this.path = (data.boundaries[0] || []).split(';')
          .map(point => (([lng, lat]) => ({lng, lat}))(point.split(',').map(p => +p)))
      })
    }
  }
}
</script>
