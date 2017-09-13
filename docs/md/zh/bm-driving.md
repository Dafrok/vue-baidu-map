<template lang="md">

# 驾车路线规划

`BmDriving`

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|location|String, Point, None||location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。|
|start|String, Point, LocalResultPoi||起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。|
|end|String, Point, LocalResultPoi||终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。|
|startCity|String||起点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 endCity 属性同时使用，否则检索结果以 location 属性为准。|
|endCity|String||终点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 startCity 属性同时使用，否则检索结果以 location 属性为准。|
|waypoints|Array||途经点集合，最多支持10个途经点，可以是名称也可以是坐标。|
|policy|DrivingPolicy||驾车导航的策略参数|
|panel|Boolean|true|是否选展现检索结果面板。|
|autoViewport|Boolean||检索结束后是否自动调整地图视野。|
|selectFirstResult|Boolean||是否选择第一个检索结果。|

## 事件

|事件名|参数|描述|
|------|----|----|
|markersset|{pois: Array, transfers: Array}|标注添加完成后的回调函数。|
|infohtmlset|{poi: LocalResultPoi, html: HTMLElement}|标注气泡内容创建后的回调函数。|
|resultshtmlset|{container: HTMLElement}|结果列表添加完成后的回调函数。|
|searchcomplete|{results: DrivingRouteResult}|检索完成后的回调函数。|
|onpolylinesset|{routes: Array, routes: Array}|折线添加完成后的回调函数。|

## 示例


### 查询北京新街口途径三点到达南京新街口的驾车路线规划

#### 代码

```html
<template>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-driving
      start="新街口"
      end="新街口"
      startCity="北京"
      endCity="南京"
      :auto-viewport="true"
      :waypoints="['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']"></bm-driving>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-driving
    start="新街口"
    end="新街口"
    startCity="北京"
    endCity="南京"
    :auto-viewport="true"
    :waypoints="['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']"></bm-driving>
</baidu-map>
</doc-preview>

### 更换驾车策略

#### 代码

```html
<template>
  <baidu-map>
    <bm-view class="map">
    </bm-view>
    <bm-driving
      start="天通苑北"
      end="宋家庄地铁站"
      :auto-viewport="true"
      policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
      :panel="false"
      location="北京"
      :waypoints="['西二旗']">
    </bm-driving>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
<div class="toolbar">
  <md-button class="md-raised md-primary" @click="leastDistance">
    最短距离
  </md-button>
  <md-button class="md-raised md-primary" @click="leastTime">
    最短时间
  </md-button>
</div>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <bm-driving :panel="false" start="天通苑北" end="宋家庄地铁站" :auto-viewport="true" location="北京" :policy="policy" :waypoints="['西二旗']"></bm-driving>
</baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      policy: ''
    }
  },
  methods: {
    leastDistance () {
      this.policy = "BMAP_DRIVING_POLICY_LEAST_DISTANCE"
    },
    leastTime () {
      this.policy = "BMAP_DRIVING_POLICY_LEAST_TIME"
    }
  }
}
</script>