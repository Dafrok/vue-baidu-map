
export declare class Item {
  /**
   * 点击菜单时执行的回调函数，第一个参数为 {BMap, map, target, pixel, point}
   */
  callback (params: any): Function
  /**
   * 指定此菜单项的文本
   */
  text: string
  /**
   * 指定此菜单项的icon URL（大小为17px*17px）
   */
  iconUrl: string

  id: string
  /**
   * 是否禁用菜单项
   */
  disabled: boolean
  /**
   * 是否是分隔线（此属性为真时，其它属性会被忽略）
   */
  seperator: boolean
}