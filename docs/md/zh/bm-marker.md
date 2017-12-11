<template lang="md">

# 点

`BmMarker`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|position|Point||标注的位置|
|offset|Size||标注的位置偏移值|
|icon|Icon||标注所用的图标对象|
|massClear|Boolean|true|是否在调用map.clearOverlays清除此覆盖物|
|dragging|Boolean|false|是否启用拖拽|
|clicking|Boolean|true|是否响应点击事件|
|raiseOnDrag|Boolean|false|拖拽标注时，标注是否开启离开地图表面效果|
|draggingCursor|String||拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范|
|rotation|Number||旋转角度|
|shadow|Icon||阴影图标|
|title|String||鼠标移到marker上的显示内容|
|label|Label||为标注添加文本标注|
|animation|String||动画效果|
|top|Boolean|false|将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果。|
|zIndex|Number|0|设置覆盖物的zIndex|

## 事件

|事件名|参数|描述|
|------|----|----|
|click|event{type, target}|点击标注图标后会触发此事件|
|dblclick|event{type, target, point,pixel}|双击标注图标后会触发此事件|
|mousedown|event{type, target, point,pixel}|鼠标在标注图上按下触发此事件|
|mouseup|event{type, target, point,pixel}|鼠标在标注图上释放触发此事件|
|mouseout|event{type, target, point,pixel}|鼠标离开标注时触发此事件|
|mouseover|event{type, target, point,pixel}|当鼠标进入标注图标区域时会触发此事件|
|remove|event{type, target}|移除标注时触发|
|infowindowclose|event{type, target}|信息窗在此标注上关闭时触发此事件|
|infowindowopen|event{type, target}|信息窗在此标注上打开时触发此事件|
|dragstart|event{type, target}|开始拖拽标注时触发此事件|
|dragging|event{type, target, pixel, point}|拖拽标注过程中触发此事件|
|dragend|event{type, target, pixel, point}|拖拽结束时触发此事件|
|rightclick|event{type, target}|右键点击标注时触发此事件|


## 示例

### 在地图中心添加可拖动的跳跃点标记

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: '#f33', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</doc-preview>

### 添加一个自定义图标的点

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
  </baidu-map>
</template>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :icon="markerIcon"></bm-marker>
  </baidu-map>
</doc-preview>
</template>

### 点击 Marker 弹出 InfoWindow

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" @click="infoWindowOpen">
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
    </bm-marker>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  }
}
</script>
```

#### 预览
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" @click="infoWindowOpen">
      <bm-info-window :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
    </bm-marker>
  </baidu-map>
</doc-preview>


<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true
      },
      markerIcon: {
        url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
        size: {width: 300, height: 157}
      },
      markerLabel: {
        content: 'Marker Label',
        opts: {
          offset: {
            width: 20,
            height: -10
          }
        }
      },
      markerPoint: {
        lng: 116.404,
        lat: 39.915
      }
    }
  },
  methods: {
    infoWindowClose () {
      this.infoWindow.show = false
    },
    infoWindowOpen () {
      this.infoWindow.show = true
    }
  }
}
</script>