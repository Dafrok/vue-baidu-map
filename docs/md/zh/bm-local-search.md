<template lang="md">

# 地区检索

`BmLocalSearch`

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|location|String, Point, None||location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。|
|bounds|Bounds||限定检索的矩形区域。如果区域超出当前 location，将不会产生检索结果。当与 nearby 属性同时，以 nearby 的查询结果为准。|
|nearby|{center: Point, radius: Number}||限定检索的圆形区域，参数为由圆心和半径组成的对象。如果区域超出当前 location，将不会产生检索结果。当与 bounds 属性同时，以 nearby 的查询结果为准。|
|keyword|String, Array||搜索关键字。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字。|
|forceLocal|Boolean||表示是否将搜索范围约束在当前城市|
|customData|CustomData||表示检索lbs云服务的数据|
|panel|Boolean|true|是否选展现检索结果面板。|
|pageCapacity|Number||设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效|
|autoViewport|Boolean||检索结束后是否自动调整地图视野。|
|selectFirstResult|Boolean||是否选择第一个检索结果。|

## 事件

|事件名|参数|描述|
|------|----|----|
|markersset|{pois: Array}|标注添加完成后的回调函数。|
|infohtmlset|{poi: LocalResultPoi}|标注气泡内容创建后的回调函数。|
|resultshtmlset|{container: HTMLElement}|结果列表添加完成后的回调函数。|
|searchcomplete|{results: [LocalResult]}|检索完成后的回调函数。如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致|

## 示例

### 对一个地图实例进行地区检索

#### 代码

```html
<template>
  <label>关键词：<input v-model="keyword"></label>
  <label>地区：<input v-model="location"></label>
  <baidu-map>
    <bm-view class="map"></bm-view>
    <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      location: '北京',
      keyword: '百度'
    }
  }
}
</script>
</style>
```


#### 预览

<doc-preview>
<baidu-map>
  <bm-view class="map">
  </bm-view>
  <md-table>
    <md-table-header>
      <md-table-head>关键词</md-table-head>
      <md-table-head>地区</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="keyword"></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="location"></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
  <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
</doc-preview>
</baidu-map>


### 在一个矩形区域内进行当前地区检索

#### 代码

```html
<template>
  <baidu-map>
    <bm-view class="map"></bm-view>
    <bm-local-search keyword="银行" :bounds="bounds" :auto-viewport="true" :panel="false"></bm-local-search>
    <bm-polygon :path="polygonPath"></bm-polygon>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      pStart: {
        lng: 116.294625,
        lat: 39.961627
      },
      pEnd: {
        lng: 116.357474,
        lat: 39.988609
      }
    }
  },
  computed: {
    bounds () {
      const {pStart, pEnd} = this
      return {
        sw: {lng: pStart.lng, lat: pStart.lat},
        ne:{lng: pEnd.lng, lat: pEnd.lat}
      }
    },
    polygonPath () {
      const {pStart, pEnd} = this
      return [
        {lng: pStart.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pEnd.lat},
        {lng: pStart.lng, lat: pEnd.lat}
      ]
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map :center="{lng: 116.274625, lat: 39.961627}" :zoom="11">
    <bm-view class="map"></bm-view>
    <bm-local-search keyword="银行" :bounds="bounds" :auto-viewport="true" :panel="false"></bm-local-search>
    <bm-polygon :path="polygonPath"></bm-polygon>
  </baidu-map>
</doc-preview>


### 在一个圆形区域内进行当前地区检索

#### 代码

```html
<template>
  <baidu-map>
    <bm-view class="map"></bm-view>
    <bm-local-search keyword="餐馆" :nearby="nearby" :auto-viewport="true" :panel="false"></bm-local-search>
    <bm-circle :center="nearby.center" :radius="nearby.radius"></bm-circle>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      nearby: {
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        radius: 1000
      }
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <baidu-map :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-view class="map"></bm-view>
    <bm-local-search keyword="餐馆" :nearby="nearby" :auto-viewport="true" :panel="false"></bm-local-search>
    <bm-circle :center="nearby.center" :radius="nearby.radius"></bm-circle>
  </baidu-map>
</doc-preview>

</template>

<script>
export default {
  data () {
    return {
      location: '北京',
      keyword: '百度',
      pStart: {
        lng: 116.294625,
        lat: 39.961627
      },
      pEnd: {
        lng: 116.357474,
        lat: 39.988609
      },
      nearby: {
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        radius: 1000
      }
    }
  },
  computed: {
    bounds () {
      const {pStart, pEnd} = this
      return {
        sw: {lng: pStart.lng, lat: pStart.lat},
        ne:{lng: pEnd.lng, lat: pEnd.lat}
      }
    },
    polygonPath () {
      const {pStart, pEnd} = this
      return [
        {lng: pStart.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pEnd.lat},
        {lng: pStart.lng, lat: pEnd.lat}
      ]
    }
  }
}
</script>