import DocStart from '../md/start.md'
import DocMap from '../md/map.md'
import DocControls from '../md/controls.md'

export default [
  {
    // 首页
    path: '/',
    redirect: '/start'
  },
  {
    // 开始
    path: '/start',
    component: DocStart
  },
  {
    // 地图
    path: '/map',
    component: DocMap
  },
  {
    // 控件
    path: '/controls',
    component: DocControls
  }
]