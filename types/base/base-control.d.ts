import { ControlAnchor, Size } from './common'

export declare class BaseControl {
  /**
   * 控件的停靠位置，默认定位到地图的右下角
   */
  anchor: ControlAnchor
  /**
   * 控件的水平偏移值
   */
  offset: Size
}