<template lang="md">

# Marker Overlay

`BmMarker`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|position|Point||The position of the marker.|
|offset|Size||The offset of the marker.|
|icon|Icon||The marker icon.|
|massClear|Boolean|true|Whether remove this overlay or not when `map.clearOverlays` is called.|
|dragging|Boolean|false|Allow to drag on the map.|
|clicking|Boolean|true|Allow to click on the map.|
|raiseOnDrag|Boolean|false|Enable the raising effect when dragging the marker.|
|draggingCursor|String||Set the cursor of marker when dragging it.|
|rotation|Number||Rotation degree.|
|shadow|Icon||Shadow icon.|
|title|String||The title of the marker.|
|label|Label||The label of the marker.|
|animation|String||Animation effects.|
|top|Boolean|false|Set whether the marker is at the top of others.|
|zIndex|Number|0|Set z-index of the marker.|

## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target}|Triggers when clicking on the marker.|
|dblclick|event{type, target, point,pixel}|Triggers when double clicking on the marker.|
|mousedown|event{type, target, point,pixel}|Triggers when press down the mouse on the marker.|
|mouseup|event{type, target, point,pixel}|Triggers when release the mouse on the marker.|
|mouseout|event{type, target, point,pixel}|Triggers when mouse pointer move out of the marker.|
|mouseover|event{type, target, point,pixel}|Triggers when mouse pointer move over the marker.|
|remove|event{type, target}|Triggers when the marker is removed.|
|infowindowclose|event{type, target}|Triggers when the info window is closed on the marker.|
|infowindowopen|event{type, target}|Triggers when the info window is opend on the marker.|
|dragstart|event{type, target}|Triggers when the drag start on the marker.|
|dragging|event{type, target, pixel, point}|Triggers when dragging the marker.|
|dragend|event{type, target, pixel, point}|Triggers when the drag is over.|
|rightclick|event{type, target}|Triggers when right click on the marker.|


## Examples

### Draggable Bouncing Marker with Label

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="Tiananmen" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="Tiananmen" :labelStyle="{color: '#f33', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
  </baidu-map>
</doc-preview>

### Custom icon of the marker

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
  </baidu-map>
</template>
```

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :icon="markerIcon"></bm-marker>
  </baidu-map>
</doc-preview>
</template>

### Show the InfoWindow when clicking on the Marker

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="markerPoint" :dragging="true" @click="infoWindowOpen">
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">Tiananmen</bm-info-window>
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

#### Preview
<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" @click="infoWindowOpen">
      <bm-info-window :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">Tiananmen</bm-info-window>
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