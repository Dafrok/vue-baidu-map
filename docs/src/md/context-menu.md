<template lang="md">

# 右键菜单

`MapContextMenu`

## 属性

|属性名|类型|默认值|描述|
|------|:---:|:---:|----|
|width |Number|undefined|菜单宽度|

## 事件

|事件名|参数|描述|
|------|:--:|----|
|open|event{type, target, point, pixel}	右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点|
|close|event{type, target, point, pixel}	右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点|

## 示例

### 插入一个右键菜单

#### 代码

```html
<template>
  <baidu-map>
    <map-view class="map">
      <map-context-menu>
        <map-context-menu-item :callback="gotoBeijing">去北京</map-context-menu-item>
        <map-context-menu-item :callback="gotoShanghai">去上海</map-context-menu-item>
      </map-context-menu>
    <map-view/>
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
  <baidu-map slot="map">
    <map-view class="map" :center="center" :zoom="zoom">
      <map-context-menu>
        <map-context-menu-item :callback="gotoBeijing" text="去北京"></map-context-menu-item>
        <map-context-menu-item :callback="gotoShanghai" text="去上海"></map-context-menu-item>
      </map-context-menu>
    </map-view>
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