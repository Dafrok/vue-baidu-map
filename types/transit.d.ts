import { Point, LocalResultPoi, TransitPolicy } from './base/common'

export declare class Transit {
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
   * 公交导航的策略参数
   */
  policy: TransitPolicy
  /**
   * 是否选展现检索结果面板。
   * @default true
   */
  panel: boolean
  /**
   * 设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效
   */
  pageCapacity: number
  /**
   * 检索结束后是否自动调整地图视野。
   */
  autoViewport: boolean
  /**
   * 是否选择第一个检索结果。
   */
  selectFirstResult: boolean
}