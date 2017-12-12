import { Point, Bounds, LocalResultPoi } from './base/common'

interface Nearby {
  center: Point | string | LocalResultPoi
  radius: number
}

interface CustomData {
  // lbs云v2接口，可在lbs云平台上查看自己的geotableId
  geotableId: number
  // 空格分隔的多字符串
  tags: string
  // 过滤条件，参考：http://developer.baidu.com/map/index.php?title=lbscloud/api/geosearch
  filter: string
}

export declare class LocalSearch {
  /**
   * location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，
   * 检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；
   * 当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。
   */
  location: string | Point
  /**
   * 搜索关键字。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字。
   */
  keyword: string | string[]
  /**
   * 是否选展现检索结果面板。
   */
  panel: boolean
  /**
   * 表示是否将搜索范围约束在当前城市
   */
  forceLocal: boolean
  /**
   * 表示检索lbs云服务的数据
   */
  customData: CustomData
  /**
   * 限定检索的矩形区域。如果区域超出当前 location，将不会产生检索结果。当与 nearby 属性同时，以 nearby 的查询结果为准。
   */
  bounds: Bounds
  /**
   * 限定检索的圆形区域，参数为由圆心和半径组成的对象。如果区域超出当前 location，将不会产生检索结果。当与 bounds 属性同时，以 nearby 的查询结果为准。
   */
  nearby: Nearby
  /**
   * 设置每页容量，取值范围：1 - 100，
   * 对于多关键字检索，容量表示每个关键字的数量，
   * 如果有2个关键字，则实际检索结果数量范围为：2 - 200
   */
  pageCapacity: number
  /**
   * 检索结束后是否自动调整地图视野。
   */
  autoViewPort: boolean
  /**
   * 是否选择第一个检索结果。
   */
  selectFirstResult: boolean
}