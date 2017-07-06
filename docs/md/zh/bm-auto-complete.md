<template lang="md">

# 自动填充

`BmAutoComplete` 默认渲染一个 `input` 元素。你可以在该组件的 slot 中定义自己的表单组件来替代它。\
如果您对检索框有更高级的 UI 定制需求，推荐使用 [百度地图 Web API](http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi) 进行查询，将返回的数据配合您自定义的 UI 组件进行开发。

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|location|String, Map, Point|map|设定返回结果的所属范围。例如“北京市”|
|types|Array, String||返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条|


## 事件

|事件名|参数|描述|
|------|:--:|----|
|searchcomplete|AutocompleteResult|在input框中输入字符后，发起列表检索，完成后的回调函数。|
|confirm|{type,target,item}|回车选中某条记录后触发 item : { index : 1 /*高亮的记录，所属返回结果的index*/ ,value : {}/*结果数据，见AutocompleteResultPoi*/ }|
|highlight|{type,target,fromitem,toitem}|键盘或者鼠标移动，某条记录高亮之后，触发 fromitem: { /*上一条记录的信息*/ index : 2 /*高亮的记录，所属返回结果的index*/ ,value : {}/*结果数据，见AutocompleteResultPoi*/ }, toitem : {/*当前记录的信息，与fromitem结构一致*/}|
|sugZIndex|

## 示例

### 为地图设置一个自动填充的检索框

#### 代码

```html
<baidu-map class="map" :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
</baidu-map>
```

#### 预览

<doc-preview>
  <baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <div class="toolbar">
    <table>
      <thead>
        <tr>
          <th>关键词</th>
        <tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <bm-auto-complete @confirm="confirm">
              <text-field></text-field>
            </bm-auto-complete>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    <bm-view class="map"></bm-view>
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
  },
  methods: {
    confirm (e) {
      const val = e.item.value
      this.keyword = val.province +  val.city +  val.district +  val.street +  val.business;
    }
  }
}
</script>
