import { Point } from './base/common'
import { BaseControl } from './base/base-control'

/**
 * 创建一个包含所有给定点坐标的矩形区域。
 * 其中sw表示矩形区域的西南角，
 * 参数ne表示矩形区域的东北角
 */
interface Bounds {
  sw: Point
  ne: Point
}

interface Copyright {
  id: number
  content: string
  bounds?: Bounds
}

export declare class Copyright extends BaseControl {
  copyright: Copyright[]
}