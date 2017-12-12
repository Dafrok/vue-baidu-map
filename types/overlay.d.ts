
type MapPanes = 
  'floatPane' // 信息窗口所在的容器  
  | 'markerMouseTarget' // 标注点击区域所在的容器  
  | 'floatShadow' // 	信息窗口阴影所在的容器
  | 'labelPane' // 文本标注所在的容器
  | 'markerPane' // 标注图标所在的容器
  | 'markerShadow' // 标注阴影所在的容器
  | 'mapPane' // 折线、多边形等矢量图形所在的容器

export declare class Overlay {
  /**
   * 自定义覆盖物所在容器。
   */
  pane: MapPanes
}