<template lang="md">

# Context Menu Item

`BmContextMenuItem`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|callback|Function|new Function|The callback function of clicking the menu item. The parameter of callback is `{BMap, map, target, pixel, point}`.|
|text|String||The text of the menu item.|
|iconUrl|String||The icon of the menu item. (size: 17 * 17)|
|disabled|Boolean|false|Whether or not disable the menu item.|
|seperator|Boolean|false|Whether the menu item is a seperator or not.|

## Events

### Add a context menu on the map

#### Code

```html
<template>
  <baidu-map class="map" :center="center" :zoom="zoom">
    <bm-context-menu>
      <bm-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bm-context-menu-item>
      <bm-context-menu-item :callback="gotoShanghai" text="Go to Shanghai" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bm-context-menu-item>
      <bm-context-menu-item seperator></bm-context-menu-item>
      <bm-context-menu-item disabled text="Go to Shenzhen"></bm-context-menu-item>
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

#### Preview

<doc-preview>
  <baidu-map class="map" :center="center" :zoom="zoom">
    <bm-context-menu>
      <bm-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bm-context-menu-item>
      <bm-context-menu-item :callback="gotoShanghai" text="Go to Shanghai" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bm-context-menu-item>
      <bm-context-menu-item seperator></bm-context-menu-item>
      <bm-context-menu-item disabled text="Go to Shenzhen"></bm-context-menu-item>
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