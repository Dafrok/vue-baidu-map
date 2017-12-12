import { Point, Size, Icon, Animation } from './base/common'

interface Label {
  content: string
  opts: {
    offset: Size
    position: Point
    enableMassClear: boolean
  }
}

export declare class Marker {
  /**
   * 标注的位置
   */
  position: Point
  /**
   * 标注的位置偏移值
   */
  offset: Size
  /**
   * 标注所用的图标对象
   */
  icon: Icon
  /**
   * @default true
   */
  massClear: boolean
  /**
   * @default false
   */
  dragging: boolean
  /**
   * @default true
   */
  clicking: boolean
  /**
   * 拖拽标注时，标注是否开启离开地图表面效果
   * @default false
   */
  raiseOnDrag: boolean
  /**
   * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
   */
  draggingCursor: string
  /**
   * 旋转角度
   */
  rotation: number
  /**
   * 阴影图标
   */
  shadow: Icon
  /**
   * 鼠标移到marker上的显示内容
   */
  title: string
  /**
   * 为标注添加文本标注
   */
  label: Label
  /**
   * 动画效果
   */
  animation: Animation
  /**
   * 将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。
   * 通过此方法可使某个标注覆盖在其他所有标注之上。
   * 注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果。
   * @default false
   */
  top: boolean
  /**
   * 设置覆盖物的zIndex
   * @default 0
   */
  zIndex: number
}