
interface HeatmapData {
  lng: number
  lat: number
  count: number
}

export declare class Heatmap {
  /**
   * 设置热力图的点坐标和权重值的集合
   */
  data: HeatmapData[]
  /**
   * 权重最大值
   */
  max: number
  /**
   * 热力图半径
   */
  radius: number
  /**
   * 热力图渐变区间，如： {5:'rgb(0, 110, 255)',.8:'rgb(100, 0, 255)'}，其中 key 表示插值的位置，取值范围 0 ~ 1，value 为颜色值。
   */
  gradient: object
  /**
   * 热力图透明度
   */
  opacity: number
}