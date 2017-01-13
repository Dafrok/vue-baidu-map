import DocStart from './components/docs/start.md'
import DocMap from './components/docs/map.md'
import DocControls from './components/docs/controls.md'

export default [
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