import { Point, Size, Icon } from './base/common'

interface LandmarkPois {
  lng: number
  lat: number
  html: string
  pauseTime: number
}

export declare class Lushu {
  /**
   * 是否行进
   * @default true
   */
  play: boolean
  /**
   * 构成路线的坐标点数组
   */
  path: Point[]
  /**
   * 要在覆盖物移动过程中显示的特殊点
   */
  landmarkPois: LandmarkPois[]
  /**
   * 覆盖物的图标
   */
  icon: Icon
  /**
   * 覆盖物移动速度
   * @default 4000
   */
  speed: number
  /**
   * 信息窗体中的内容，无内容则不显示信息窗体
   * @default ''
   */
  content: string
  /**
   * 是否自动调整路线视野
   * @default false
   */
  autoView: boolean
  /**
   * 移动物体是否随路径旋转朝向
   * @default false
   */
  rotation: boolean
  /**
   * 是否开启移动物体上的信息窗体
   * @default true
   */
  infoWindow: boolean
}