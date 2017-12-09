import { Point } from './base/common'

export declare class Polyline {
  /**
   * 设置折线的点数组
   * @default []
   */
  path: Point[]
  /**
   * 设置线颜色，参数为合法的CSS颜色值
   */
  strokeColor: string
  /**
   * 设置线的宽度，取值为大于等于1的整数
   */
  strokeWeight: number
  /**
   * 设置线透明度，取值范围0 - 1
   */
  strokeOpacity: number
  /**
   * @default 'solid'
   */
  strokeStyle: 'solid' | 'dashed'
  /**
   * @default true
   */
  massClear: boolean
  /**
   * @default true
   */
  clicking: boolean
  /**
   * @default false
   */
  editing: boolean
}