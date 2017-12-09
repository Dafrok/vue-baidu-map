import { Bounds } from './base/common'

export declare class Ground {
  /**
   * 设置图层显示的矩形区域
   */
  bounds: Bounds
  /**
   * 设置图层的透明度
   */
  opacity: number
  /**
   * 图层地址
   */
  imageURL: string
  /**
   * 设置图层显示的最小级别
   */
  displayOnMinLevel: number
  /**
   * 设置图层显示的最大级别
   */
  displayOnMaxLevel: number
}