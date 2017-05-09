import CateView from './components/CateView.vue'

export default [
  {
    // 首页
    path: '/',
    name: 'VUE BAIDU MAP',
    component: () => import('./md/zh/index.md'),
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
        component: () => import('./md/zh/start-installation.md'),
        name: '安装'
      },
      {
        path: 'usage',
        component: () => import('./md/zh/start-usage.md'),
        name: '快速上手'
      },
      {
        path: 'base',
        component: () => import('./md/zh/start-base.md'),
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
        component: () => import('./md/zh/baidu-map.md'),
        name: '地图容器'
      },
      {
        path: 'bm-view',
        component: () => import('./md/zh/bm-view.md'),
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
        component: () => import('./md/zh/bm-scale.md'),
        name: '比例尺'
      },
      {
        path: 'navigation',
        component: () => import('./md/zh/bm-navigation.md'),
        name: '缩放'
      },
      {
        path: 'map-type',
        component: () => import('./md/zh/bm-map-type.md'),
        name: '地图类型'
      },
      {
        path: 'overview-map',
        component: () => import('./md/zh/bm-overview-map.md'),
        name: '缩略图'
      },
      {
        path: 'geolocation',
        component: () => import('./md/zh/bm-geolocation.md'),
        name: '定位'
      },
      {
        path: 'copyright',
        component: () => import('./md/zh/bm-copyright.md'),
        name: '版权'
      },
      {
        path: 'city-list',
        component: () => import('./md/zh/bm-city-list.md'),
        name: '城市列表'
      },
      {
        path: 'panorama',
        component: () => import('./md/zh/bm-panorama.md'),
        name: '全景'
      },
      {
        path: 'control',
        component: () => import('./md/zh/bm-control.md'),
        name: '自定义控件'
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
        component: () => import('./md/zh/bm-marker.md')
      },
      {
        path: 'polyline',
        name: '折线',
        component: () => import('./md/zh/bm-polyline.md')
      },
      {
        path: 'polygon',
        name: '多边形',
        component: () => import('./md/zh/bm-polygon.md')
      },
      {
        path: 'circle',
        name: '圆形',
        component: () => import('./md/zh/bm-circle.md')
      },
      {
        path: 'ground',
        name: '地面',
        component: () => import('./md/zh/bm-ground.md')
      },
      {
        path: 'label',
        name: '标签',
        component: () => import('./md/zh/bm-label.md')
      },
      {
        path: 'info-window',
        name: '信息窗体',
        component: () => import('./md/zh/bm-info-window.md')
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
        component: () => import('./md/zh/bm-tile.md'),
        name: '瓦片图层'
      },
      {
        path: 'traffic',
        component: () => import('./md/zh/bm-traffic.md'),
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
        component: () => import('./md/zh/bm-local-search.md')
      },
      {
        path: 'transit',
        name: '公交路线规划',
        component: () => import('./md/zh/bm-transit.md')
      },
      {
        path: 'walking',
        name: '步行路线规划',
        component: () => import('./md/zh/bm-walking.md')
      },
      {
        path: 'driving',
        name: '驾车路线规划',
        component: () => import('./md/zh/bm-driving.md')
      },
      {
        path: 'bus',
        name: '公交路线检索',
        component: () => import('./md/zh/bm-bus.md')
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
        component: () => import('./md/zh/bm-context-menu.md')
      },
      {
        path: 'item',
        name: '菜单项',
        component: () => import('./md/zh/bm-context-menu-item.md')
      }
    ]
  },
  {
    path: '/other',
    name: '其它',
    component: CateView,
    children: [
      {
        path: 'menu',
        name: '行政区划',
        component: () => import('./md/zh/bm-boundary.md')
      }
    ]
  }
]
