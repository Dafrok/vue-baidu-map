import { Point, Bounds } from './base/common'
import { BaseControl } from './base/base-control'

interface Copyright {
  id: number
  content: string
  bounds?: Bounds
}

export declare class Copyright extends BaseControl {
  copyright: Copyright[]
}