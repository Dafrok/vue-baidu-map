import { Point, Size, Icon } from './base/common'

export declare class Marker {
  position: Point
  offset: Size
  icon: Icon
  /**
   * @default true
   */
  massClear: boolean
  /**
   * @default false
   */
  dragging: boolean
  
}