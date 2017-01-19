import DocStart from '../md/start.md'
import DocMap from '../md/map.md'
import DocControls from '../md/controls.md'

export default [
  {
    // 首页
    path: '/',
    redirect: '/start',
    name:  '首页'
  },
  {
    // 开始
    path: '/start',
    component: DocStart,
    name: '开始使用'
  },
  {
    // 地图组件
    path: '/map',
    component: DocMap,
    name: '地图组件'
  },
  {
    // 控件组件
    path: '/controls',
    component: DocControls,
    name: '控件组件'
  }
]