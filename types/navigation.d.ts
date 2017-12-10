import { NavigationControlType } from './base/common'
import { BaseControl } from './base/base-control'

export declare class Navigation extends BaseControl {
  /**
   * 平移缩放控件的类型
   */
  type: NavigationControlType
  /**
   * 是否显示级别提示信息
   */
  showZoomInfo: boolean
  /**
   * 控件是否集成定位功能
   * @default false
   */
  enableGeolocation: boolean
}