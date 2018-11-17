<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  name: 'bm-circle',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    center: {
    },
    radius: {
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    massClear: {
      type: Boolean,
      default: true
    },
    clicking: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'center.lng' (val, oldVal) {
      const {BMap, originInstance, isEditing, disableEditing, enableEditing, center, editing} = this
      if (!isEditing) {
        disableEditing()
        const lng = val
        if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
          originInstance.setCenter(createPoint(BMap, {lng, lat: center.lat}))
        }
        editing && enableEditing()
      }
    },
    'center.lat' (val, oldVal) {
      const {BMap, originInstance, isEditing, disableEditing, enableEditing, center, editing} = this
      if (!isEditing) {
        disableEditing()
        const lat = val
        if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
          originInstance.setCenter(createPoint(BMap, {lng: center.lng, lat}))
        }
        editing && enableEditing()
      }
    },
    radius (val, oldVal) {
      const {originInstance, isEditing, disableEditing, enableEditing, editing} = this
      if (!isEditing) {
        disableEditing()
        originInstance.setRadius(val)
        editing && enableEditing()
      }
    },
    strokeColor (val) {
      this.originInstance.setStrokeColor(val)
    },
    strokeOpacity (val) {
      this.originInstance.setStrokeOpacity(val)
    },
    strokeWeight (val) {
      this.originInstance.setStrokeWeight(val)
    },
    strokeStyle (val) {
      this.originInstance.setStrokeStyle(val)
    },
    fillColor (val) {
      this.originInstance.setFillColor(val)
    },
    fillOpacity (val) {
      this.originInstance.setFillOpacity(val)
    },
    editing (val) {
      val ? this.enableEditing() : this.disableEditing()
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    },
    clicking (val) {
      this.reload()
    }
  },
  methods: {
    dragStartHandler () {
      this.isEditing = true
    },
    dragEndHandler () {
      this.isEditing = false
      this.bindEditingNodeEvents()
    },
    bindEditingNodeEvents () {
      const {originInstance, editingKey, dragStartHandler, dragEndHandler} = this
      originInstance[editingKey].forEach($node => {
        $node.addEventListener('dragstart', dragStartHandler)
        $node.addEventListener('dragend', dragEndHandler)
      })
    },
    enableEditing () {
      const {originInstance, bindEditingNodeEvents} = this
      originInstance.enableEditing()
      bindEditingNodeEvents()
    },
    disableEditing () {
      const {originInstance} = this
      originInstance.disableEditing()
    },
    getEditingKey (overlay) {
      const stack = []
      overlay.enableEditing()
      setTimeout(() => {
        for (const key in overlay) {
          if (overlay[key] && overlay[key].length === 2) {
            stack.push(key)
          }
        }
        overlay.disableEditing()
        for (const key in overlay) {
          if (overlay[key] && overlay[key].length === 0 && ~stack.indexOf(key)) {
            this.editingKey = key
          }
        }
      }, 0)
    },
    load () {
      const {BMap, map, center, radius, strokeColor, strokeWeight, strokeOpacity, strokeStyle, fillColor, fillOpacity, editing, massClear, clicking, enableEditing, disableEditing, getEditingKey, editingKey} = this
      const overlay = new BMap.Circle(createPoint(BMap, {lng: center.lng, lat: center.lat}), radius, {
        strokeColor,
        strokeWeight,
        strokeOpacity,
        strokeStyle,
        fillColor,
        fillOpacity,
        // enableEditing: editing,
        enableMassClear: massClear,
        enableClicking: clicking
      })
      this.originInstance = overlay
      map.addOverlay(overlay)
      bindEvents.call(this, overlay)
      // 解决圆形组件无法双向绑定的问题
      !editingKey && getEditingKey(overlay)
      setTimeout(() => {
        editing ? enableEditing() : disableEditing()
      }, 0)
    }
  }
}
</script>
