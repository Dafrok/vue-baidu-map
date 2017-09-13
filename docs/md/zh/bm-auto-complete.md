<template lang="md">

# 自动填充

`BmAutoComplete` 组件默认渲染一个 `input` 元素。你可以在该组件的 slot 中定义自己的表单组件来替代它。

## 注意事项

1. AutoComplete 类是一个百度地图 JS API 官方 **不推荐** 使用的核心类，因为它的定制性较差。
2. 如果您对检索框有高级的 UI 定制需求，官方 **推荐** 使用 [百度地图 Web API](http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi) 进行查询，将返回的数据配合您自定义的 UI 组件进行开发。
3. 自动填充组件弹出的检索框有时会被其它层覆盖，此时需要在 `sugStyle` 属性中声明 `zIndex` 加以调整。
4. 此组件可能在 1.0.0 版本中移除，或以更好的方式实现。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|location|String, Map, Point|map|设定返回结果的所属范围。例如“北京市”|
|types|Array, String||返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条|
|sugStyle|Object|{}|定制提示框基本样式，通常用于调整 zIndex 防止被覆盖。|


## 事件

|事件名|参数|描述|
|------|----|----|
|searchcomplete|AutocompleteResult|在input框中输入字符后，发起列表检索，完成后的回调函数。|
|confirm|{type,target,item}|回车选中某条记录后触发 item : { index : 1 /*高亮的记录，所属返回结果的index*/ ,value : {}/*结果数据，见AutocompleteResultPoi*/ }|
|highlight|{type,target,fromitem,toitem}|键盘或者鼠标移动，某条记录高亮之后，触发 fromitem: { /*上一条记录的信息*/ index : 2 /*高亮的记录，所属返回结果的index*/ ,value : {}/*结果数据，见AutocompleteResultPoi*/ }, toitem : {/*当前记录的信息，与fromitem结构一致*/}|

## 示例

### 自定义控件、自动填充、本地检索组件的配合使用

#### 代码

```html
<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-view class="map"></bm-view>
  <bm-control :offset="{width: '10px', height: '10px'}">
    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
      <search-field placeholder="请输入地名关键字"></search-field> <!-- 这里指代一个自定义搜索框组件 -->
    </bm-auto-complete>
  </bm-control>
  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
</baidu-map>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
```

#### 预览

<doc-preview>
<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-view class="map"></bm-view>
  <bm-control :offset="{width: 10, height: 10}">
    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
      <text-field placeholder="关键词"></text-field>
    </bm-auto-complete>
  </bm-control>
  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
</baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>