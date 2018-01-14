import { MapType, Point, MapStyle } from './base/common'

export declare class Map {
  /**
   * 百度地图开发者平台申请的密钥，仅在局部注册组件时声明。
   */
  ak: string
  /**
   * 定位, 可使用如“广州市海珠区”的地区字符串，也可以使用对象如 {lng: 116.404, lat: 39.915} 表示经纬度
   */
  center: Point | string
  /**
   * 缩放等级
   */
  zoom: number
  /**
   * 最大缩放级别
   */
  maxZoom: number
  /**
   * 最小缩放级别
   */
  minZoom: number
  /**
   * 高分屏模式 该项仅在地图组件挂载时加载一次
   * @default true
   */
  highResolution: boolean
  /**
   * 允许点击 该项仅在地图组件挂载时加载一次
   * @default true
   */
  mapClick: boolean
  /**
   * 地图类型
   * @default 'BMAP_NORMAL_MAP'
   */
  mapType: MapType
  /**
   * 允许拖拽
   * @default true
   */
  dragging: boolean
  /**
   * 允许鼠标滚轮缩放
   * @default false
   */
  scrollWheelZoom: boolean
  /**
   * 允许双击缩放
   * @default true
   */
  doubleClickZoom: boolean
  /**
   * 允许键盘操作
   * @default true
   */
  keyboard: boolean
  /**
   * 允许惯性拖拽
   * @default true
   */
  inertialDragging: boolean
  /**
   * 允许无级缩放
   * @default true
   */
  continuousZoom: boolean
  /**
   * 允许双指缩放
   * @default true
   */
  pinchToZoom: boolean
  /**
   * 允许自适应容器尺寸
   * @default true
   */
  autoResize: boolean
  /**
   * 自定义主题
   */
  mapStyle: MapStyle
  /**
   * 自定义主题的 StyleJSON alias
   */
  theme: any[]
}