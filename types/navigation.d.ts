import { NavigationControlType } from './base/common'
import { BaseControl } from './base/base-control'

export declare class Navigation extends BaseControl {
  type: NavigationControlType
  showZoomInfo: boolean
  /**
   * @default false
   */
  enableGeolocation: boolean
}