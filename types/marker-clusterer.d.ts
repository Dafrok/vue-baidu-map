import { Point, Size, Icon, Animation } from './base/common'

export declare class MarkerClusterer {
  /**
   * 网格大小
   */
  gridSize: Size
  /**
   * 聚合的最大缩放级别
   */
  maxZoom: number
  /**
   * 单个聚合的最小数量
   */
  minClusterSize: Size
  /**
   * 聚合的样式风格集合
   */
  styles: any[]
  /**
   * 单个聚合的落脚点是否是聚合内所有标记的平均中心
   * @default false
   */
  averageCenter: boolean
}