import BaiduMap from './map/Map.vue'
import BmView from './map/MapView.vue'
import BmScale from './controls/Scale.vue'
import BmNavigation from './controls/Navigation.vue'
import BmMapType from './controls/MapType.vue'
import BmOverviewMap from './controls/OverviewMap.vue'
import BmGeolocation from './controls/Geolocation.vue'
import BmCopyright from './controls/Copyright.vue'
import BmCityList from './controls/CityList.vue'
import BmPanorama from './controls/Panorama.vue'
import BmControl from './controls/Control.vue'
import BmMarker from './overlays/Marker.vue'
import BmPointCollection from './overlays/PointCollection.vue'
import BmPolyline from './overlays/Polyline.vue'
import BmPolygon from './overlays/Polygon.vue'
import BmCircle from './overlays/Circle.vue'
import BmGround from './overlays/Ground.vue'
import BmLabel from './overlays/Label.vue'
import BmInfoWindow from './overlays/InfoWindow.vue'
import BmOverlay from './overlays/Overlay.vue'
import BmContextMenu from './context-menu/Menu.vue'
import BmContextMenuItem from './context-menu/Item.vue'
import BmLocalSearch from './search/LocalSearch.vue'
import BmTransit from './search/Transit.vue'
import BmWalking from './search/Walking.vue'
import BmDriving from './search/Driving.vue'
import BmBus from './search/Bus.vue'
import BmTile from './layers/Tile.vue'
import BmTraffic from './layers/Traffic.vue'
import BmBoundary from './others/Boundary.vue'
import BmAutoComplete from './others/AutoComplete.vue'

import BmlMarkerClusterer from './extra/MarkerClusterer.vue'
import BmlLushu from './extra/Lushu.vue'
import BmlHeatmap from './extra/Heatmap.vue'
import BmlCurveLine from './extra/CurveLine.vue'

export default {
  install (Vue, options) {
    const {ak} = options
    Vue.prototype._BMap = () => ({ak})

    Vue.component('baidu-map', BaiduMap)
    Vue.component('bm-view', BmView)

    Vue.component('bm-scale', BmScale)
    Vue.component('bm-navigation', BmNavigation)
    Vue.component('bm-map-type', BmMapType)
    Vue.component('bm-overview-map', BmOverviewMap)
    Vue.component('bm-geolocation', BmGeolocation)
    Vue.component('bm-copyright', BmCopyright)
    Vue.component('bm-city-list', BmCityList)
    Vue.component('bm-panorama', BmPanorama)
    Vue.component('bm-control', BmControl)

    Vue.component('bm-marker', BmMarker)
    Vue.component('bm-point-collection', BmPointCollection)
    Vue.component('bm-polyline', BmPolyline)
    Vue.component('bm-polygon', BmPolygon)
    Vue.component('bm-circle', BmCircle)
    Vue.component('bm-ground', BmGround)
    Vue.component('bm-label', BmLabel)
    Vue.component('bm-info-window', BmInfoWindow)
    Vue.component('bm-overlay', BmOverlay)

    Vue.component('bm-context-menu', BmContextMenu)
    Vue.component('bm-context-menu-item', BmContextMenuItem)

    Vue.component('bm-local-search', BmLocalSearch)
    Vue.component('bm-transit', BmTransit)
    Vue.component('bm-walking', BmWalking)
    Vue.component('bm-driving', BmDriving)
    Vue.component('bm-bus', BmBus)

    Vue.component('bm-tile', BmTile)
    Vue.component('bm-traffic', BmTraffic)

    Vue.component('bm-auto-complete', BmAutoComplete)
    Vue.component('bm-boundary', BmBoundary)
  }
}

export {
  BaiduMap, BmView,
  BmScale, BmNavigation, BmMapType, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama, BmControl,
  BmMarker, BmPointCollection, BmPolyline, BmPolygon, BmCircle, BmGround, BmLabel, BmInfoWindow, BmOverlay,
  BmContextMenu, BmContextMenuItem,
  BmLocalSearch, BmTransit, BmWalking, BmDriving, BmBus,
  BmTile, BmTraffic,
  BmBoundary, BmAutoComplete
}

export {
  BmlMarkerClusterer,
  BmlLushu,
  BmlHeatmap,
  BmlCurveLine
}
