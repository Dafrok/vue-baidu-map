
export declare class Boundary {
  /**
   * 行政区划名称
   */
  name: string
  /**
   * 设置折线颜色，参数为合法的CSS颜色值
   */
  strokeColor: string
  /**
   * 设置折线的宽度，取值为大于等于1的整数
   */
  strokeWeight: number
  /**
   * 设置折线透明度，取值范围0 - 1
   */
  strokeOpacity: number
  /**
   * @default 'solid'
   */
  strokeStyle: 'solid' | 'dashed'
  /**
   * 设置行政区划的填充颜色，参数为合法的CSS颜色值。
   * 当参数为空字符串时，折线覆盖物将没有填充效果
   */
  fillColor: string
  /**
   * 设置行政区划的填充透明度，取值范围0 - 1
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
}