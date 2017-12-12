import { Point, LocalResultPoi, DrivingPolicy } from './base/common'

export declare class Driving {
  /**
   * location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，
   * 检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；
   * 当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。
   */
  location: string | Point
  /**
   * 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。
   */
  start: string | Point | LocalResultPoi
  /**
   * 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。
   */
  end: string | Point | LocalResultPoi
  /**
   * 起点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 endCity 属性同时使用，否则检索结果以 location 属性为准。
   */
  startCity: string | number
  /**
   * 终点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 startCity 属性同时使用，否则检索结果以 location 属性为准。
   */
  endCity: string | number
  /**
   * 途经点集合，最多支持10个途经点，可以是名称也可以是坐标。
   */
  waypoints: Point[]
  /**
   * 公交导航的策略参数
   */
  policy: DrivingPolicy
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