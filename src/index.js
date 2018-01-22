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

    Vue.component('BaiduMap', BaiduMap)
    Vue.component('BmView', BmView)

    Vue.component('BmScale', BmScale)
    Vue.component('BmNavigation', BmNavigation)
    Vue.component('BmMapType', BmMapType)
    Vue.component('BmOverviewMap', BmOverviewMap)
    Vue.component('BmGeolocation', BmGeolocation)
    Vue.component('BmCopyright', BmCopyright)
    Vue.component('BmCityList', BmCityList)
    Vue.component('BmPanorama', BmPanorama)
    Vue.component('BmControl', BmControl)

    Vue.component('BmMarker', BmMarker)
    Vue.component('BmPointCollection', BmPointCollection)
    Vue.component('BmPolyline', BmPolyline)
    Vue.component('BmPolygon', BmPolygon)
    Vue.component('BmCircle', BmCircle)
    Vue.component('BmGround', BmGround)
    Vue.component('BmLabel', BmLabel)
    Vue.component('BmInfoWindow', BmInfoWindow)
    Vue.component('BmOverlay', BmOverlay)

    Vue.component('BmContextMenu', BmContextMenu)
    Vue.component('BmContextMenuItem', BmContextMenuItem)

    Vue.component('BmLocalSearch', BmLocalSearch)
    Vue.component('BmTransit', BmTransit)
    Vue.component('BmWalking', BmWalking)
    Vue.component('BmDriving', BmDriving)
    Vue.component('BmBus', BmBus)

    Vue.component('BmTile', BmTile)
    Vue.component('BmTraffic', BmTraffic)

    Vue.component('BmAutoComplete', BmAutoComplete)
    Vue.component('BmBoundary', BmBoundary)
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
