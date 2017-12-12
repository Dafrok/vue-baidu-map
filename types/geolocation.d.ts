import { ControlAnchor, Size, Icon } from './base/common'
import { BaseControl } from './base/base-control'

export declare class Geolocation extends BaseControl {
  /**
   * 是否显示定位信息面板。默认显示定位信息面板
   */
  showAddressBar: boolean
  /**
   * 添加控件时是否进行定位。默认添加控件时不进行定位
   * @default false
   */
  autoLocation: boolean
  /**
   * 可自定义定位中心点的Icon样式
   */
  locationIcon: Icon
}