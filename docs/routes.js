import CateView from './components/CateView.vue'
import Index from './components/Index.vue'
import Issues from './components/Issues.vue'

const langs = ['zh', 'en']

const genRouteMap = (routeMap, lang, isChild) => routeMap.reduce((res, item) => {
  const route = {
    path: isChild ? item.path : `/${lang}/${item.path}`,
    name: item.name[lang],
    component: typeof item.component === 'string' ? () => import(`./md/${lang}/${item.component}.md`) : item.component,
    meta: Object.assign({lang}, item.meta),
    children: genRouteMap(item.children || [], lang, true)
  }
  res.push(route)
  return res
}, [])

const routeMap = [
  {
    // 首页
    path: 'index',
    name: {
      'zh': '文档',
      'en': 'Documentation'
    },
    component: 'index',
    meta: {
      hidden: true
    }
  },
  {
    // 开始
    path: 'start',
    component: CateView,
    name: {
      zh: '开始',
      en: 'Get Start'
    },
    children: [
      {
        path: 'installation',
        component: 'start-installation',
        name: {
          zh: '安装',
          en: 'Installation'
        }
      },
      {
        path: 'usage',
        component: 'start-usage',
        name: {
          zh: '快速上手',
          en: 'Usage'
        }
      },
      {
        path: 'third-party',
        component: 'start-third-party',
        name: {
          zh: '第三方组件',
          en: 'Third Party Components'
        }
      },
      {
        path: 'base',
        component: 'start-base',
        name: {
          zh: '基础',
          en: 'Base'
        }
      }
    ]
  },
  {
    // 指南
    path: 'guide',
    component: CateView,
    name: {
      zh: '指南',
      en: 'Guide'
    },
    children: [
      {
        path: 'painting',
        component: 'guide-painting',
        name: {
          zh: '图形绘制',
          en: 'Painting'
        }
      }
    ]
  },
  {
    path: 'map',
    name: {
      zh: '地图',
      en: 'Map'
    },
    component: CateView,
    children: [
      {
        path: 'baidu-map',
        component: 'baidu-map',
        name: {
          zh: '地图容器',
          en: 'Map Container'
        }
      },
      {
        path: 'bm-view',
        component: 'bm-view',
        name: {
          zh: '地图视图',
          en: 'Map View'
        }
      }
    ]
  },
  {
    path: 'control',
    name: {
      zh: '控件',
      en: 'Control'
    },
    component: CateView,
    children: [
      {
        path: 'scale',
        component: 'bm-scale',
        name: {
          zh: '比例尺',
          en: 'Scale'
        }
      },
      {
        path: 'navigation',
        component: 'bm-navigation',
        name: {
          zh: '缩放',
          en: 'Navigation'
        }
      },
      {
        path: 'map-type',
        component: 'bm-map-type',
        name: {
          zh: '地图类型',
          en: 'Map Type'
        }
      },
      {
        path: 'overview-map',
        component: 'bm-overview-map',
        name: {
          zh: '缩略图',
          en: 'Overview Map'
        }
      },
      {
        path: 'geolocation',
        component: 'bm-geolocation',
        name: {
          zh: '定位',
          en: 'Geolocation'
        }
      },
      {
        path: 'copyright',
        component: 'bm-copyright',
        name: {
          zh: '版权',
          en: 'Copyright'
        }
      },
      {
        path: 'city-list',
        component: 'bm-city-list',
        name: {
          zh: '城市列表',
          en: 'City List'
        }
      },
      {
        path: 'panorama',
        component: 'bm-panorama',
        name: {
          zh: '全景',
          en: 'Panorama'
        }
      },
      {
        path: 'control',
        component: 'bm-control',
        name: {
          zh: '自定义控件',
          en: 'Custom Control'
        }
      }
    ]
  },
  {
    path: 'overlay',
    name: {
      zh: '覆盖物',
      en: 'Overlay'
    },
    component: CateView,
    children: [
      {
        path: 'marker',
        component: 'bm-marker',
        name: {
          zh: '点',
          en: 'Marker'
        }
      },
      {
        path: 'point-collection',
        component: 'bm-point-collection',
        name: {
          zh: '海量点',
          en: 'Point Collection'
        }
      },
      {
        path: 'polyline',
        component: 'bm-polyline',
        name: {
          zh: '折线',
          en: 'Polyline'
        }
      },
      {
        path: 'polygon',
        component: 'bm-polygon',
        name: {
          zh: '多边形',
          en: 'Polygon'
        }
      },
      {
        path: 'circle',
        component: 'bm-circle',
        name: {
          zh: '圆形',
          en: 'Circle'
        }
      },
      {
        path: 'ground',
        component: 'bm-ground',
        name: {
          zh: '地面',
          en: 'Ground'
        }
      },
      {
        path: 'label',
        component: 'bm-label',
        name: {
          zh: '标签',
          en: 'Label'
        }
      },
      {
        path: 'info-window',
        component: 'bm-info-window',
        name: {
          zh: '信息窗体',
          en: 'Info Window'
        }
      },
      {
        path: 'overlay',
        component: 'bm-overlay',
        name: {
          zh: '自定义覆盖物',
          en: 'Custom Overlay'
        }
      }
    ]
  },
  {
    path: 'layer',
    name: {
      zh: '图层',
      en: 'Layer'
    },
    component: CateView,
    children: [
      {
        path: 'tile',
        component: 'bm-tile',
        name: {
          zh: '瓦片图层',
          en: 'Tile'
        }
      },
      {
        path: 'traffic',
        component: 'bm-traffic',
        name: {
          zh: '交通流量图层',
          en: 'Traffic'
        }
      }
    ]
  },
  {
    path: 'search',
    name: {
      zh: '检索',
      en: 'Search'
    },
    component: CateView,
    children: [
      {
        path: 'local-search',
        component: 'bm-local-search',
        name: {
          zh: '地区检索',
          en: 'Local Search'
        }
      },
      {
        path: 'transit',
        component: 'bm-transit',
        name: {
          zh: '公交路线规划',
          en: 'Transit'
        }
      },
      {
        path: 'walking',
        component: 'bm-walking',
        name: {
          zh: '步行路线规划',
          en: 'Walking'
        }
      },
      {
        path: 'driving',
        component: 'bm-driving',
        name: {
          zh: '驾车路线规划',
          en: 'Driving'
        }
      },
      {
        path: 'bus',
        component: 'bm-bus',
        name: {
          zh: '公交路线检索',
          en: 'Bus'
        }
      }
    ]
  },
  {
    path: 'context-menu',
    name: {
      zh: '上下文菜单',
      en: 'Context Menu'
    },
    component: CateView,
    children: [
      {
        path: 'menu',
        component: 'bm-context-menu',
        name: {
          zh: '菜单',
          en: 'Menu'
        }
      },
      {
        path: 'item',
        component: 'bm-context-menu-item',
        name: {
          zh: '菜单项',
          en: 'Menu Item'
        }
      }
    ]
  },
  {
    path: 'other',
    name: {
      zh: '其它',
      en: 'Other'
    },
    component: CateView,
    children: [
      {
        path: 'boundary',
        name: {
          zh: '行政区划',
          en: 'Boundary'
        },
        component: 'bm-boundary'
      },
      {
        path: 'auto-complete',
        name: {
          zh: '自动填充',
          en: 'Auto Complete'
        },
        component: 'bm-auto-complete'
      }
    ]
  },
  {
    path: 'bmaplib',
    name: {
      zh: '第三方组件库',
      en: 'Third Party'
    },
    component: CateView,
    children: [
      {
        path: 'marker-clusterer',
        name: {
          zh: '点聚合',
          en: 'Marker Clusterer'
        },
        component: 'bml-marker-clusterer'
      },
      {
        path: 'lushu',
        name: {
          zh: '路书',
          en: 'LuShu'
        },
        component: 'bml-lushu'
      },
      {
        path: 'heatmap',
        name: {
          zh: '热力图',
          en: 'Heatmap'
        },
        component: 'bml-heatmap'
      },
      {
        path: 'curve-line',
        name: {
          zh: '弧线',
          en: 'Curve Line'
        },
        component: 'bml-curve-line'
      }
    ]
  }
]

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/issues',
    name: 'ISSUE',
    component: Issues,
    meta: {
      hidden: true
    }
  },
  ...langs.reduce((map, lang) => map.concat(genRouteMap(routeMap, lang)), [])
]
