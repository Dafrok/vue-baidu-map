import CateView from './components/CateView.vue'

import DocIndex from './md/index.md'

import DocStartBase from './md/start-base.md'
import DocStartInstallation from './md/start-installation.md'
import DocStartUsage from './md/start-usage.md'

import DocBaiduMap from './md/baidu-map.md'
import DocMapView from './md/map-view.md'

import DocControlScale from './md/control-scale.md'
import DocControlNavigation from './md/control-navigation.md'
import DocControlMapType from './md/control-map-type.md'
import DocControlOverviewMap from './md/control-overview-map.md'
import DocControlGeolocation from './md/control-geolocation.md'
import DocControlCopyright from './md/control-copyright.md'
import DocControlCityList from './md/control-city-list.md'

import DocOverlayMarker from './md/overlay-marker.md'
import DocOverlayPolyline from './md/overlay-polyline.md'
import DocOverlayPolygon from './md/overlay-polygon.md'
import DocOverlayCircle from './md/overlay-circle.md'
import DocOverlayLabel from './md/overlay-label.md'
import DocOverlayInfoWindow from './md/overlay-info-window.md'

import DocContextMenu from './md/context-menu.md'
import DocContextMenuItem from './md/context-menu-item.md'

export default [
  {
    // 首页
    path: '/',
    name:  'VUE BAIDU MAP',
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
        path: 'map-view',
        component: DocMapView,
        name: '地图视图'
      },
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
    path: '/context-menu',
    name: '菜单',
    component: CateView,
    children: [
      {
        path: 'menu',
        name: '菜单容器',
        component: DocContextMenu
      },
      {
        path: 'item',
        name: '菜单项',
        component: DocContextMenuItem
      },
    ]
  }
]