import { Copyright } from './base/common'

export declare class Tile {
  /**
   * 是否使用了带有透明信息的PNG。
   * 由于IE6不支持PNG透明，因此需要特殊处理
   */
  transparentPng: boolean
  /**
   * 指定图块网址模板，该模板可以针对每个图块请求而展开，
   * 以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 
   * 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，
   * 您需要实现TileLayer.getTileUrl()抽象方法
   */
  tileUrlTemplate: string
  /**
   * 地图图层的版权信息
   */
  copyright: Copyright
  zIndex: number
}