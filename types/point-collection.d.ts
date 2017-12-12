import { Point, ShapeType, SizeType } from './base/common'

export declare class PointCollection {
  /**
   * 设置要在地图上展示的点坐标集合
   * @default []
   */
  points: Point[]
  /**
   * 海量点的预设形状
   * @default 'BMAP_POINT_SHAPE_CIRCLE'
   */
  shape: ShapeType
  /**
   * 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'；
   * 哈希字符串'#000000'；rgb字符串，如'rgb(0,0,0)’；
   * rgba字符串，如'rgb(255,0,0,0.1)'；hsl字符串，如'hsl(0,100%,50%)'；
   * hsla字符串，如'hsla(0,100%,50%,0.4)'
   */
  color: string
  /**
   * 海量点的预设尺寸 
   * @default 'BMAP_POINT_SIZE_NORMAL'
   */
  size: SizeType
}