import Map from './map/Map.vue'
import MapView from './map/MapView.vue'
import ScaleControl from './controls/Scale.vue'
import NavigationControl from './controls/Navigation.vue'
import MapTypeControl from './controls/MapType.vue'
import OverviewMapControl from './controls/OverviewMap.vue'

export default {
  install (Vue, options) {
    const {ak} = options
    Vue.prototype._BMap = () => {
      return {
        ak
      }
    }
    Vue.component('baidu-map', Map)
    Vue.component('map-view', MapView)
    Vue.component('map-control-scale', ScaleControl)
    Vue.component('map-control-navigation', NavigationControl)
    Vue.component('map-control-map-type', MapTypeControl)
    Vue.component('map-control-overview-map', OverviewMapControl)
  }
}