import { Point } from './base/common'

export declare class Bus {
  /**
   * location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，
   * 检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；
   * 当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。
   */
  location: string | Point
  /**
   * 公交路线关键词
   */
  keyword: string
  /**
   * 是否选展现检索结果面板。
   * @default true
   */
  panel: boolean
  /**
   * 检索结束后是否自动调整地图视野。
   */
  autoViewport: boolean
  /**
   * 是否选择第一个检索结果。
   */
  selectFirstResult: boolean
}