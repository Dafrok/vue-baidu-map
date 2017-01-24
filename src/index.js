import Map from './map/Map.vue'
import MapView from './map/MapView.vue'
import MapControlScale from './controls/Scale.vue'
import MapControlNavigation from './controls/Navigation.vue'
import MapControlMapType from './controls/MapType.vue'
import MapControlOverviewMap from './controls/OverviewMap.vue'
import MapControlGeolocation from './controls/Geolocation.vue'
import MapControlCopyright from './controls/Copyright.vue'
import MapControlCityList from './controls/CityList.vue'
import MapOverlayMarker from './overlays/Marker.vue'
import MapOverlayPolyline from './overlays/Polyline.vue'

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

    Vue.component('map-control-scale', MapControlScale)
    Vue.component('map-control-navigation', MapControlNavigation)
    Vue.component('map-control-map-type', MapControlMapType)
    Vue.component('map-control-overview-map', MapControlOverviewMap)
    Vue.component('map-control-geolocation', MapControlGeolocation)
    Vue.component('map-control-copyright', MapControlCopyright)
    Vue.component('map-control-city-list', MapControlCityList)

    Vue.component('map-overlay-marker', MapOverlayMarker)
    Vue.component('map-overlay-polyline', MapOverlayPolyline)
  }
}