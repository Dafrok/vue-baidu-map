import { Point, Size } from './base/common'

export declare class Label {
  /**
   * 设置文本标注的内容。支持HTML
   */
  content: string
  /**
   * 设置文本标注的内容。支持HTML
   */
  title: string
  /**
   * 设置文本标注的偏移值
   */
  offset: Size
  /**
   * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效
   */
  position: Point
  /**
   * 设置文本标注样式，该样式将作用于文本标注的容器元素上。
   * 其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 
   * 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，
   * 例如：背景色属性要写成：backgroundColor
   */
  labelStyle: object
  /**
   * @default 0
   */
  zIndex: number
  /**
   * @default true
   */
  massClear: boolean
}