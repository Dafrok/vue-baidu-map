import { MapType, MapTypeControlType } from './base/common'
import { BaseControl } from './base/base-control'

export declare class MapType extends BaseControl {
  /**
   * 控件样式
   */
  type: MapTypeControlType
  /**
   * 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
   */
  mapTypes: MapType[]
}