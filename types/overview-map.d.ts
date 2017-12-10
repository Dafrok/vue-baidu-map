import { BaseControl } from './base/base-control'
import { Size } from './base/common'

export declare class OverviewMap extends BaseControl {
  /**
   * 缩略地图控件的大小
   */
  size: Size
  /**
   * 缩略地图添加到地图后的开合状态
   * @default false
   */
  isOpen: boolean
}