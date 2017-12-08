import { MapType, Point } from './base/common'

export declare class Map {
  // 	Baidu map developer platform application key. Valid only when registered locally
  ak: string
  // Center coordinate of the map
  center: Point | string
  // Zoom level of the map.
  zoom: number
  // The maximum limit of zoom level.
  maxZoom: number
  // The minimum limit of zoom level.
  minZoom: number
  /**
   * High resolution mode.
   * @default true
   */
  highResolution: boolean
  /**
   * Allow to click on the map.
   * @default true
   */
  mapClick: boolean
  /**
   * @default 'BMAP_NORMAL_MAP'
   */
  mapType: MapType
  /**
   * Allow to drag on the map.
   * @default true
   */
  dragging: boolean
  /**
   * Allow to zoom by mousewheel on the map.
   * @default false
   */
  scrollWheelZoom: boolean
  /**
   * Allow to zoom by double click on the map.
   * @default true
   */
  doubleClickZoom: boolean
  /**
   * Allow keyboard events on the map.
   * @default true
   */
  keyboard: boolean
  /**
   * Dragging with inertia.
   * @default true
   */
  inertialDragging: boolean
  /**
   * @default true
   */
  continuousZoom: boolean
  /**
   * Allow pinch to zoom.
   * @default true
   */
  pinchToZoom: boolean
  /**
   * @default true
   */
  autoResize: boolean
  // 	Set custom themes.
  theme: any[]
}