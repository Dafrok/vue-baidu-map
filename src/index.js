import Map from './map/Map.vue'
import BmView from './map/MapView.vue'
import BmScale from './controls/Scale.vue'
import MapControlNavigation from './controls/Navigation.vue'
import MapControlMapType from './controls/MapType.vue'
import MapControlOverviewMap from './controls/OverviewMap.vue'
import MapControlGeolocation from './controls/Geolocation.vue'
import MapControlCopyright from './controls/Copyright.vue'
import MapControlCityList from './controls/CityList.vue'
import MapControlPanorama from './controls/Panorama.vue'
import MapControl from './controls/Control.vue'
import MapOverlayMarker from './overlays/Marker.vue'
import MapOverlayPolyline from './overlays/Polyline.vue'
import MapOverlayPolygon from './overlays/Polygon.vue'
import MapOverlayCircle from './overlays/Circle.vue'
import MapOverlayGround from './overlays/Ground.vue'
import MapOverlayLabel from './overlays/Label.vue'
import MapOverlayInfoWindow from './overlays/InfoWindow.vue'
import MapContextMenu from './context-menu/Menu.vue'
import MapContextMenuItem from './context-menu/Item.vue'
import MapLocalSearch from './search/LocalSearch.vue'
import MapTransit from './search/Transit.vue'
import MapWalking from './search/Walking.vue'
import MapDriving from './search/Driving.vue'
import MapBus from './search/Bus.vue'
import MapLayerTile from './layers/Tile.vue'
import MapLayerTraffic from './layers/Traffic.vue'
import MapExtendBoundary from './extends/Boundary.vue'

export default {
  install (Vue, options) {
    const {ak} = options
    Vue.prototype._BMap = () => {
      return {
        ak
      }
    }
    Vue.component('baidu-map', Map)
    Vue.component('bm-view', BmView)

    Vue.component('bm-scale', BmScale)
    Vue.component('bm-navigation', MapControlNavigation)
    Vue.component('bm-map-type', MapControlMapType)
    Vue.component('bm-overview-map', MapControlOverviewMap)
    Vue.component('bm-geolocation', MapControlGeolocation)
    Vue.component('bm-copyright', MapControlCopyright)
    Vue.component('bm-city-list', MapControlCityList)
    Vue.component('bm-panorama', MapControlPanorama)
    Vue.component('bm-control', MapControl)

    Vue.component('bm-marker', MapOverlayMarker)
    Vue.component('bm-polyline', MapOverlayPolyline)
    Vue.component('bm-polygon', MapOverlayPolygon)
    Vue.component('bm-circle', MapOverlayCircle)
    Vue.component('bm-ground', MapOverlayGround)
    Vue.component('bm-label', MapOverlayLabel)
    Vue.component('bm-info-window', MapOverlayInfoWindow)

    Vue.component('bm-context-menu', MapContextMenu)
    Vue.component('bm-context-menu-item', MapContextMenuItem)

    Vue.component('bm-local-search', MapLocalSearch)
    Vue.component('bm-transit', MapTransit)
    Vue.component('bm-walking', MapWalking)
    Vue.component('bm-driving', MapDriving)
    Vue.component('bm-bus', MapBus)

    Vue.component('bm-tile', MapLayerTile)
    Vue.component('bm-traffic', MapLayerTraffic)

    Vue.component('bm-boundary', MapExtendBoundary)
  }
}
