import CateView from './components/CateView.vue'

export default [
  {
    path: '/',
    redirect: '/zh/index'
  },
  {
    // 首页
    path: '/zh/index',
    name: 'VUE BAIDU MAP',
    component: () => import('./md/zh/index.md'),
    meta: {
      hidden: true,
      lang: 'zh'
    }
  },
  {
    // 开始
    path: '/zh/start',
    component: CateView,
    name: '开始',
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'installation',
        component: () => import('./md/zh/start-installation.md'),
        name: '安装',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'usage',
        component: () => import('./md/zh/start-usage.md'),
        name: '快速上手',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'base',
        component: () => import('./md/zh/start-base.md'),
        name: '基础',
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/map',
    name: '地图',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'baidu-map',
        component: () => import('./md/zh/baidu-map.md'),
        name: '地图容器',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'bm-view',
        component: () => import('./md/zh/bm-view.md'),
        name: '地图视图',
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/control',
    name: '控件',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'scale',
        component: () => import('./md/zh/bm-scale.md'),
        name: '比例尺',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'navigation',
        component: () => import('./md/zh/bm-navigation.md'),
        name: '缩放',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'map-type',
        component: () => import('./md/zh/bm-map-type.md'),
        name: '地图类型',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'overview-map',
        component: () => import('./md/zh/bm-overview-map.md'),
        name: '缩略图',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'geolocation',
        component: () => import('./md/zh/bm-geolocation.md'),
        name: '定位',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'copyright',
        component: () => import('./md/zh/bm-copyright.md'),
        name: '版权',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'city-list',
        component: () => import('./md/zh/bm-city-list.md'),
        name: '城市列表',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'panorama',
        component: () => import('./md/zh/bm-panorama.md'),
        name: '全景',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'control',
        component: () => import('./md/zh/bm-control.md'),
        name: '自定义控件',
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/overlay',
    name: '覆盖物',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'marker',
        name: '点',
        component: () => import('./md/zh/bm-marker.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'polyline',
        name: '折线',
        component: () => import('./md/zh/bm-polyline.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'polygon',
        name: '多边形',
        component: () => import('./md/zh/bm-polygon.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'circle',
        name: '圆形',
        component: () => import('./md/zh/bm-circle.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'ground',
        name: '地面',
        component: () => import('./md/zh/bm-ground.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'label',
        name: '标签',
        component: () => import('./md/zh/bm-label.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'info-window',
        name: '信息窗体',
        component: () => import('./md/zh/bm-info-window.md'),
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/layer',
    name: '图层',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'tile',
        component: () => import('./md/zh/bm-tile.md'),
        name: '瓦片图层',
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'traffic',
        component: () => import('./md/zh/bm-traffic.md'),
        name: '交通流量图层',
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/search',
    name: '检索',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'local-search',
        name: '地区检索',
        component: () => import('./md/zh/bm-local-search.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'transit',
        name: '公交路线规划',
        component: () => import('./md/zh/bm-transit.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'walking',
        name: '步行路线规划',
        component: () => import('./md/zh/bm-walking.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'driving',
        name: '驾车路线规划',
        component: () => import('./md/zh/bm-driving.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'bus',
        name: '公交路线检索',
        component: () => import('./md/zh/bm-bus.md'),
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/context-menu',
    name: '菜单',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'menu',
        name: '上下文菜单',
        component: () => import('./md/zh/bm-context-menu.md'),
        meta: {
          lang: 'zh'
        }
      },
      {
        path: 'item',
        name: '菜单项',
        component: () => import('./md/zh/bm-context-menu-item.md'),
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    path: '/zh/other',
    name: '其它',
    component: CateView,
    meta: {
      lang: 'zh'
    },
    children: [
      {
        path: 'menu',
        name: '行政区划',
        component: () => import('./md/zh/bm-boundary.md'),
        meta: {
          lang: 'zh'
        }
      }
    ]
  },
  {
    // 英文首页
    path: '/en/index',
    name: 'VUE BAIDU MAP',
    component: () => import('./md/en/index.md'),
    meta: {
      hidden: true,
      lang: 'en'
    }
  },
  {
    // 开始
    path: '/en/start',
    component: CateView,
    name: 'Get Start',
    meta: {
      lang: 'en'
    },
    children: [
      {
        path: 'installation',
        component: () => import('./md/en/start-installation.md'),
        name: 'Installation',
        meta: {
          lang: 'en'
        }
      },
      {
        path: 'usage',
        component: () => import('./md/en/start-usage.md'),
        name: 'Usage',
        meta: {
          lang: 'en'
        }
      },
      {
        path: 'base',
        component: () => import('./md/en/start-base.md'),
        name: 'Base',
        meta: {
          lang: 'en'
        }
      }
    ]
  },
  {
    path: '/en/map',
    name: 'Map',
    component: CateView,
    meta: {
      lang: 'en'
    },
    children: [
      {
        path: 'baidu-map',
        component: () => import('./md/en/baidu-map.md'),
        name: 'Map Container',
        meta: {
          lang: 'en'
        }
      },
      {
        path: 'bm-view',
        component: () => import('./md/en/bm-view.md'),
        name: 'Map View',
        meta: {
          lang: 'en'
        }
      }
    ]
  }
]
