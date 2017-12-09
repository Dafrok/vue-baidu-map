import { Point, Size, Icon, Animation } from './base/common'

interface Label {
  content: string
  opts: {
    offset: Size
    position: Point
    enableMassClear: boolean
  }
}

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
  /**
   * @default true
   */
  clicking: boolean
  /**
   * @default false
   */
  raiseOnDrag: boolean
  draggingCursor: string
  rotation: number
  shadow: Icon
  title: string
  label: Label
  animation: Animation | null
  /**
   * @default false
   */
  top: boolean
  zIndex: number
}