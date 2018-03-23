import * as Vue from 'vue'

import { Map } from './map'
import { MapView } from './map-view'
import { Scale } from './scale'
import { Navigation } from './navigation'
import { MapType } from './map-type'
import { OverviewMap } from './overview-map'
import { Geolocation } from './geolocation'
import { Copyright } from './copyright'
import { CityList } from './city-list'
import { Panorama } from './panorama'
import { Control } from './control'
import { Marker } from './marker'
import { PointCollection } from './point-collection'
import { Polyline } from './polyline'
import { Polygon } from './polygon'
import { Circle } from './circle'
import { Ground } from './ground'
import { Label } from './label'
import { InfoWindow } from './info-window'
import { Overlay } from './overlay'
import { Menu } from './menu'
import { Item } from './item'
import { LocalSearch } from './local-search'
import { Transit } from './transit'
import { Walking } from './walking'
import { Driving } from './driving'
import { Bus } from './bus'
import { Tile } from './tile'
import { Traffic } from './traffic'
import { Boundary } from './boundary'
import { AutoComplete } from './auto-complete'
import { MarkerClusterer } from './marker-clusterer'
import { Heatmap } from './heatmap'
import { Lushu } from './lushu'
import { CurveLine } from './curve-line'

export interface InstallationOptions {
  /**
   * Baidu map developer platform application key.
   * Visit http://lbsyun.baidu.com/apiconsole/key for details
   */
  ak: string
}

/**
 * Install all vue-baidu-map components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(BaiduMap)` to install.
 */
declare function install (vue: typeof Vue, options: InstallationOptions): void

declare const _default: {
  install: typeof install
}
export default _default

export class BaiduMap  extends Map {}
export class BmView extends MapView {}
export class BmScale extends Scale {}
export class BmNavigation extends Navigation {}
export class BmMapType extends MapType {}
export class BmOverviewMap extends OverviewMap {}
export class BmGeolocation extends Geolocation {}
export class BmCopyright extends Copyright {}
export class BmCityList extends CityList {}
export class BmPanorama extends Panorama {}
export class BmControl extends Control {}
export class BmMarker extends Marker {}
export class BmPointCollection extends PointCollection {}
export class BmPolyline extends Polyline {}
export class BmPolygon extends Polygon {}
export class BmCircle extends Circle {}
export class BmGround extends Ground {}
export class BmLabel extends Label {}
export class BmInfoWindow extends InfoWindow {}
export class BmOverlay extends Overlay {}
export class BmContextMenu extends Menu {}
export class BmContextMenuItem extends Item {}
export class BmLocalSearch extends LocalSearch {}
export class BmTransit extends Transit {}
export class BmWalking extends Walking {}
export class BmDriving extends Driving {}
export class BmBus extends Bus {}
export class BmTile extends Tile {}
export class BmTraffic extends Traffic {}
export class BmBoundary extends Boundary {}
export class BmAutoComplete extends AutoComplete {}
export class BmlMarkerClusterer extends MarkerClusterer {}
export class BmlLushu extends Lushu {}
export class BmlHeatmap extends Heatmap {}
export class BmlCurveLine extends CurveLine {}