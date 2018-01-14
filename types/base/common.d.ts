

export type ControlAnchor = 
  'BMAP_ANCHOR_TOP_LEFT' // 控件将定位到地图的左上角
  | 'BMAP_ANCHOR_TOP_RIGHT' // 控件将定位到地图的右上角
  | 'BMAP_ANCHOR_BOTTOM_LEFT' // 控件将定位到地图的左下角
  | 'BMAP_ANCHOR_BOTTOM_RIGHT' // 控件将定位到地图的右下角

export type MapType = 
  'BMAP_NORMAL_MAP' // 此地图类型展示普通街道视图  
  | 'BMAP_PERSPECTIVE_MAP' // 此地图类型展示透视图像视图  
  | 'BMAP_SATELLITE_MAP' // 此地图类型展示卫星视图  
  | 'BMAP_HYBRID_MAP' // 此地图类型展示卫星和路网的混合视图  

export type NavigationControlType = 
  'BMAP_NAVIGATION_CONTROL_LARGE' // 标准的平移缩放控件（包括平移、缩放按钮和滑块）  
  | 'BMAP_NAVIGATION_CONTROL_SMALL' // 仅包含平移和缩放按钮  
  | 'BMAP_NAVIGATION_CONTROL_PAN' // 仅包含平移按钮  
  | 'BMAP_NAVIGATION_CONTROL_ZOOM' // 仅包含缩放按钮

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

export type TransitPolicy =
  'BMAP_TRANSIT_POLICY_LEAST_TIME' // 最少时间
  | 'BMAP_TRANSIT_POLICY_LEAST_TRANSFER' // 最少换乘
  | 'BMAP_TRANSIT_POLICY_LEAST_WALKING' // 最少步行
  | 'BMAP_TRANSIT_POLICY_AVOID_SUBWAYS' // 不乘地铁

export type DrivingPolicy =
  'BMAP_DRIVING_POLICY_LEAST_TIME' // 最少时间
  | 'BMAP_DRIVING_POLICY_LEAST_DISTANCE' // 最短距离
  | 'BMAP_DRIVING_POLICY_AVOID_HIGHWAYS' // 避开高速
  
export type MapTypeControlType =
  'BMAP_MAPTYPE_CONTROL_HORIZONTAL' // 按钮水平方式展示，默认采用此类型展示
  | 'BMAP_MAPTYPE_CONTROL_DROPDOWN' // 按钮呈下拉列表方式展示
  | 'BMAP_MAPTYPE_CONTROL_MAP	' // 以图片方式展示类型控件，设置该类型后无法指定maptypes属性

/**
 * 以像素表示一个矩形区域的大小。
 */  
export type Size = { width: number, height: number }

/**
 * 表示一个地理坐标点
 */
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

/**
 * 表示一条版权信息
 */
export interface Copyright {
  id: number
  content: string
  bounds?: Bounds
}

export interface PredictDate {
  // 预测日期，取值1到7，表示周一到周日
  weekday: number
  // 预测小时数，取值0到23，表示当日的0点到23点
  hour: number
}

// 详见：http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a7b5
interface LocalResultPoi {
  title: string
  point: Point
  url: string
  address: string
  city: string
  phoneNumber: string
  postcode: string
  type: any
  isAccurate: boolean
  province: string
  tags: string[]
  detailUrl: string
}

export interface MapStyle {
  style: string,
  featrues: any[],
  styleJson: any[]
}