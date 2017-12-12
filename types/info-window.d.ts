import { Point, Size } from './base/common'

export declare class InfoWindow {
  /**
   * @default false
   */
  show: boolean
  position: Point
  /**
   * 信息窗标题文字，支持HTML内容
   */
  title: string
  /**
   * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
   */
  width: number
  /**
   * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
   */
  height: number
  /**
   * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
   */
  maxWidth: number
  /**
   * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，
   * 在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
   */
  offset: Size
  /**
   * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
   * @default false
   */
  maximize: boolean
  /**
   * 是否开启信息窗口打开时地图自动移动（默认开启）
   * @default true
   */
  autoPan: boolean
  /**
   * 是否开启点击地图关闭信息窗口（默认开启）
   * @default true
   */
  closeOnClick: boolean
  /**
   * 自定义部分的短信内容，可选项。
   * 完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。
   * 短信内容最长为140个字
   */
  message: string
}