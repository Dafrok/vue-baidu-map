<template lang="md">

# 菜单项

`BmContextMenuItem` 菜单项是右键菜单的子组件，请勿在其他组件中使用。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|callback|Function|new Function|点击菜单时执行的回调函数，第一个参数为 {BMap, map, target, pixel, point}|
|text|String||指定此菜单项的文本|
|iconUrl|String||指定此菜单项的icon URL（大小为17px*17px）|
|disabled|Boolean|false|是否禁用菜单项|
|seperator|Boolean|false|是否是分隔线（此属性为真时，其它属性会被忽略）|

## 示例

### 插入一个复杂的右键菜单

#### 代码

```html
<template>
  <baidu-map class="map" :center="center" :zoom="zoom">
    <bm-context-menu>
      <bm-context-menu-item :callback="gotoBeijing" text="去北京"></bm-context-menu-item>
      <bm-context-menu-item :callback="gotoShanghai" text="去上海" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bm-context-menu-item>
      <bm-context-menu-item seperator></bm-context-menu-item>
      <bm-context-menu-item disabled text="去深圳"></bm-context-menu-item>
    </bm-context-menu>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = {
        lng: 116.404,
        lat: 39.915
      }
    },
    gotoShanghai (e) {
      this.center = {
        lng: 121.473354,
        lat: 31.238413
      }
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="center" :zoom="zoom">
    <bm-context-menu>
      <bm-context-menu-item :callback="gotoBeijing" text="去北京"></bm-context-menu-item>
      <bm-context-menu-item :callback="gotoShanghai" text="去上海" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bm-context-menu-item>
      <bm-context-menu-item seperator></bm-context-menu-item>
      <bm-context-menu-item disabled text="去深圳"></bm-context-menu-item>
    </bm-context-menu>
  </baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = {
        lng: 116.404,
        lat: 39.915
      }
    },
    gotoShanghai (e) {
      this.center = {
        lng: 121.473354,
        lat: 31.238413
      }
    }
  }
}
</script>