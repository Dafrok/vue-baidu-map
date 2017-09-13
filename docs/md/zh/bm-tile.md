# 瓦片图层

`BmTile`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|transparentPng|Boolean||是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理|
|tileUrlTemplate|String||指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法|
|copyright|Copyright||地图图层的版权信息|
|zIndex|Number||图层的zIndex|


## 示例

### 清华校园微观图

#### 代码

```html
<template>
  <baidu-map class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bm-tile
      :isTransparentPng="true"
      tileUrlTemplate="//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png">
    </bm-tile>
  </baidu-map>
</template>
```

#### 预览

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bm-tile
      :isTransparentPng="true"
      tileUrlTemplate="//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png"/></bm-tile>
  </baidu-map>
</doc-preview>