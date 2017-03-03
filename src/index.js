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
import MapOverlayPolygon from './overlays/Polygon.vue'
import MapOverlayCircle from './overlays/Circle.vue'
import MapOverlayLabel from './overlays/Label.vue'
import MapOverlayInfoWindow from './overlays/InfoWindow.vue'
import MapContextMenu from './context-menu/Menu.vue'
import MapContextMenuItem from './context-menu/Item.vue'
import MapLocalSearch from './search/LocalSearch.vue'

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
    Vue.component('map-overlay-polygon', MapOverlayPolygon)
    Vue.component('map-overlay-circle', MapOverlayCircle)
    Vue.component('map-overlay-label', MapOverlayLabel)
    Vue.component('map-overlay-info-window', MapOverlayInfoWindow)

    Vue.component('map-context-menu', MapContextMenu)
    Vue.component('map-context-menu-item', MapContextMenuItem)

    Vue.component('map-local-search', MapLocalSearch)
  }
}