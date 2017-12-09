
export type ControlAnchor = 
  'BMAP_ANCHOR_TOP_LEFT' 
  | 'BMAP_ANCHOR_TOP_RIGHT'
  | 'BMAP_ANCHOR_BOTTOM_LEFT'
  | 'BMAP_ANCHOR_BOTTOM_RIGHT'

export type MapType = 
  'BMAP_NORMAL_MAP' 
  | 'BMAP_PERSPECTIVE_MAP'
  | 'BMAP_SATELLITE_MAP'
  | 'BMAP_HYBRID_MAP'

export type NavigationControlType = 
  'BMAP_NAVIGATION_CONTROL_LARGE'
  | 'BMAP_NAVIGATION_CONTROL_SMALL'
  | 'BMAP_NAVIGATION_CONTROL_PAN'
  | 'BMAP_NAVIGATION_CONTROL_ZOOM'

export type Animation = 
  'BMAP_ANIMATION_DROP' // 坠落动画  
  | 'BMAP_ANIMATION_BOUNCE' // 跳动动画

export type ShapeType =
  'BMAP_POINT_SHAPE_CIRCLE' // 圆形，为默认形状  
  | 'BMAP_POINT_SHAPE_STAR' // 星形
  | 'BMAP_POINT_SHAPE_SQUARE' // 方形
  | 'BMAP_POINT_SHAPE_RHOMBUS' // 菱形
  | 'BMAP_POINT_SHAPE_WATERDROP' // 水滴状，该类型无size和color属性

export type SizeType =
  'BMAP_POINT_SIZE_TINY' // 宽高为2px*2px
  | 'BMAP_POINT_SIZE_SMALLER' // 宽高为4px*4px
  | 'BMAP_POINT_SIZE_SMALL' // 宽高为8px*8px
  | 'BMAP_POINT_SIZE_NORMAL' // 宽高为10px*10px，为海量点默认尺寸
  | 'BMAP_POINT_SIZE_BIG' // 宽高为16px*16px
  | 'BMAP_POINT_SIZE_BIGGER' // 宽高为20px*20px
  | 'BMAP_POINT_SIZE_HUGE' // 宽高为30px*30px

export type Size = { width: number, height: number }

export type Point = { lng: number, lat: number }

export interface IconOptions {
  anchor: Size
  imageOffset: Size
  imageSize: Size
  infoWindowAnchor: Size
  printImageUrl: string
}

export interface Icon {
  url: string
  size: Size,
  opts: IconOptions
}

/**
 * 创建一个包含所有给定点坐标的矩形区域。
 * 其中sw表示矩形区域的西南角，
 * 参数ne表示矩形区域的东北角
 */
export interface Bounds {
  sw: Point
  ne: Point
}
