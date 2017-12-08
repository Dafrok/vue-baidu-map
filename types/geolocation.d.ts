import { ControlAnchor, Size, Icon } from './base/common'
import { BaseControl } from './base/base-control'

export declare class Geolocation extends BaseControl{
  showAddressBar: boolean
  /**
   * @default false
   */
  autoLocation: boolean
  locationIcon: Icon
}