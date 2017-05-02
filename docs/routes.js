import CateView from './components/CateView.vue'

import DocIndex from './md/index.md'

import DocStartBase from './md/start-base.md'
import DocStartInstallation from './md/start-installation.md'
import DocStartUsage from './md/start-usage.md'

import DocBaiduMap from './md/baidu-map.md'
import DocBmView from './md/bm-view.md'

import DocControlScale from './md/bm-scale.md'
import DocControlNavigation from './md/bm-navigation.md'
import DocControlMapType from './md/bm-map-type.md'
import DocControlOverviewMap from './md/bm-overview-map.md'
import DocControlGeolocation from './md/bm-geolocation.md'
import DocControlCopyright from './md/bm-copyright.md'
import DocControlCityList from './md/bm-city-list.md'
import DocControlPanorama from './md/bm-panorama.md'

import DocOverlayMarker from './md/bm-marker.md'
import DocOverlayPolyline from './md/bm-polyline.md'
import DocOverlayPolygon from './md/bm-polygon.md'
import DocOverlayCircle from './md/bm-circle.md'
import DocOverlayGround from './md/bm-ground.md'
import DocOverlayLabel from './md/bm-label.md'
import DocOverlayInfoWindow from './md/bm-info-window.md'

import DocContextMenu from './md/bm-context-menu.md'
import DocContextMenuItem from './md/bm-context-menu-item.md'

import DocLocalSearch from './md/bm-local-search.md'
import DocTransit from './md/bm-transit.md'
import DocWalking from './md/bm-walking.md'
import DocDriving from './md/bm-driving.md'

import DocLayerTile from './md/bm-tile.md'
import DocLayerTraffic from './md/bm-traffic.md'

import DocExtendBoundary from './md/bm-boundary.md'

export default [
  {
    // 首页
    path: '/',
    name: 'VUE BAIDU MAP',
    component: DocIndex,
    meta: 'hidden'
  },
  {
    // 开始
    path: '/start',
    component: CateView,
    name: '开始',
    children: [
      {
        path: 'installation',
        component: DocStartInstallation,
        name: '安装'
      },
      {
        path: 'usage',
        component: DocStartUsage,
        name: '快速上手'
      },
      {
        path: 'base',
        component: DocStartBase,
        name: '基础'
      }
    ]
  },
  {
    path: '/map',
    name: '地图',
    component: CateView,
    children: [
      {
        path: 'baidu-map',
        component: DocBaiduMap,
        name: '地图容器'
      },
      {
        path: 'bm-view',
        component: DocBmView,
        name: '地图视图'
      }
    ]
  },
  {
    path: '/control',
    name: '控件',
    component: CateView,
    children: [
      {
        path: 'scale',
        component: DocControlScale,
        name: '比例尺'
      },
      {
        path: 'navigation',
        component: DocControlNavigation,
        name: '缩放'
      },
      {
        path: 'map-type',
        component: DocControlMapType,
        name: '地图类型'
      },
      {
        path: 'overview-map',
        component: DocControlOverviewMap,
        name: '缩略图'
      },
      {
        path: 'geolocation',
        component: DocControlGeolocation,
        name: '定位'
      },
      {
        path: 'copyright',
        component: DocControlCopyright,
        name: '版权'
      },
      {
        path: 'city-list',
        component: DocControlCityList,
        name: '城市列表'
      },
      {
        path: 'panorama',
        component: DocControlPanorama,
        name: '全景'
      }
    ]
  },
  {
    path: '/overlay',
    name: '覆盖物',
    component: CateView,
    children: [
      {
        path: 'marker',
        name: '点',
        component: DocOverlayMarker
      },
      {
        path: 'polyline',
        name: '折线',
        component: DocOverlayPolyline
      },
      {
        path: 'polygon',
        name: '多边形',
        component: DocOverlayPolygon
      },
      {
        path: 'circle',
        name: '圆形',
        component: DocOverlayCircle
      },
      {
        path: 'ground',
        name: '地面',
        component: DocOverlayGround
      },
      {
        path: 'label',
        name: '标签',
        component: DocOverlayLabel
      },
      {
        path: 'info-window',
        name: '信息窗体',
        component: DocOverlayInfoWindow
      }
    ]
  },
  {
    path: '/layer',
    name: '图层',
    component: CateView,
    children: [
      {
        path: 'tile',
        component: DocLayerTile,
        name: '瓦片图层'
      },
      {
        path: 'traffic',
        component: DocLayerTraffic,
        name: '交通流量图层'
      }
    ]
  },
  {
    path: '/search',
    name: '检索',
    component: CateView,
    children: [
      {
        path: 'local-search',
        name: '地区检索',
        component: DocLocalSearch
      },
      {
        path: 'transit',
        name: '公交路线规划',
        component: DocTransit
      },
      {
        path: 'walking',
        name: '步行路线规划',
        component: DocWalking
      },
      {
        path: 'driving',
        name: '驾车路线规划',
        component: DocDriving
      }
    ]
  },
  {
    path: '/context-menu',
    name: '菜单',
    component: CateView,
    children: [
      {
        path: 'menu',
        name: '上下文菜单',
        component: DocContextMenu
      },
      {
        path: 'item',
        name: '菜单项',
        component: DocContextMenuItem
      }
    ]
  },
  {
    path: '/extend',
    name: '扩展',
    component: CateView,
    children: [
      {
        path: 'menu',
        name: '行政区划',
        component: DocExtendBoundary
      }
    ]
  }
]
