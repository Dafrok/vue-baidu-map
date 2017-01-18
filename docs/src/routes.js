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
    // 地图
    path: '/map',
    component: DocMap,
    name: '基础地图'
  },
  {
    // 控件
    path: '/controls',
    component: DocControls,
    name: '地图控件'
  }
]