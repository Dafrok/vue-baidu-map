import { Point } from "./base/common";
import { Map } from "./map";


export declare class AutoComplete {
  /**
   * 返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。
   * 如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。
   * 第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。
   * 如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条
   */
  types: string[] | string
  /**
   * 设定返回结果的所属范围。例如“北京市”
   */
  location: Point | string | Map
  /**
   * 定制提示框基本样式，通常用于调整 zIndex 防止被覆盖。
   */
  sugStyle: object
}