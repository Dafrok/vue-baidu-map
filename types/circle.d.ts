import { Point } from './base/common'

export declare class Circle {
  center: Point
  /**
   * 设置圆形的半径，单位为米
   */
  radius: number
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
   * 设置圆的填充颜色，参数为合法的CSS颜色值。
   * 当参数为空字符串时，圆覆盖物将没有填充效果
   */
  fillColor: string
  /**
   * 设置圆的填充透明度，取值范围0 - 1
   */
  fillOpacity: number
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