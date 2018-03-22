# 热力图

`BmlHeatmap`

## 属性

|属性名|类型 |默认值|描述|
|------|-----|------|----|
|data|Array[{lng, lat, count}]|[]|设置热力图的点坐标和权重值的集合|
|max|Number||权重最大值|
|radius|Number||热力图半径|
|gradient|Object||热力图渐变区间，如： `{5:'rgb(0, 110, 255)',.8:'rgb(100, 0, 255)'}`，其中 key 表示插值的位置，取值范围 0 ~ 1，value 为颜色值。|
|opacity|Number||热力图透明度|

## 示例

### 添加一个热力图

#### 代码

```html
<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="14">
  <bml-heatmap :data="data" :max="100" :radius="20">
  </bml-heatmap>
</baidu-map>

<script>
import {BmlHeatmap} from 'vue-baidu-map'

export default {
  components: {
    BmlHeatmap
  },
  data () {
    return {
      data: [
        {lng: 116.418261, lat: 39.921984, count: 50},
        {lng: 116.423332, lat: 39.916532, count: 51},
        {lng: 116.419787, lat: 39.930658, count: 15}
        // ...此处添加更多的数据集
      ]
    }
  }
}
</script>
```

#### 预览

<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="14">
  <bml-heatmap :data="data" :max="100" :radius="20">
  </bml-heatmap>
</baidu-map>

<script>
import BmlHeatmap from '../../../components/extra/Heatmap.vue'

export default {
  components: {
    BmlHeatmap
  },
  data () {
    return {
      data: [
        {lng: 116.418261, lat: 39.921984, count: 50},
        {lng: 116.423332, lat: 39.916532, count: 51},
        {lng: 116.419787, lat: 39.930658, count: 15},
        {lng: 116.418455, lat: 39.920921, count: 40},
        {lng: 116.418843, lat: 39.915516, count: 100},
        {lng: 116.42546, lat: 39.918503, count: 6},
        {lng: 116.423289, lat: 39.919989, count: 18},
        {lng: 116.418162, lat: 39.915051, count: 80},
        {lng: 116.422039, lat: 39.91782, count: 11},
        {lng: 116.41387, lat: 39.917253, count: 7},
        {lng: 116.41773, lat: 39.919426, count: 42},
        {lng: 116.421107, lat: 39.916445, count: 4},
        {lng: 116.417521, lat: 39.917943, count: 27},
        {lng: 116.419812, lat: 39.920836, count: 23},
        {lng: 116.420682, lat: 39.91463, count: 60},
        {lng: 116.415424, lat: 39.924675, count: 8},
        {lng: 116.419242, lat: 39.914509, count: 15},
        {lng: 116.422766, lat: 39.921408, count: 25},
        {lng: 116.421674, lat: 39.924396, count: 21},
        {lng: 116.427268, lat: 39.92267, count: 1},
        {lng: 116.417721, lat: 39.920034, count: 51},
        {lng: 116.412456, lat: 39.92667, count: 7},
        {lng: 116.420432, lat: 39.919114, count: 11},
        {lng: 116.425013, lat: 39.921611, count: 35},
        {lng: 116.418733, lat: 39.931037, count: 22},
        {lng: 116.419336, lat: 39.931134, count: 4},
        {lng: 116.413557, lat: 39.923254, count: 5},
        {lng: 116.418367, lat: 39.92943, count: 3},
        {lng: 116.424312, lat: 39.919621, count: 100},
        {lng: 116.423874, lat: 39.919447, count: 87},
        {lng: 116.424225, lat: 39.923091, count: 32},
        {lng: 116.417801, lat: 39.921854, count: 44},
        {lng: 116.417129, lat: 39.928227, count: 21},
        {lng: 116.426426, lat: 39.922286, count: 80},
        {lng: 116.421597, lat: 39.91948, count: 32},
        {lng: 116.423895, lat: 39.920787, count: 26},
        {lng: 116.423563, lat: 39.921197, count: 17},
        {lng: 116.417982, lat: 39.922547, count: 17},
        {lng: 116.426126, lat: 39.921938, count: 25},
        {lng: 116.42326, lat: 39.915782, count: 100},
        {lng: 116.419239, lat: 39.916759, count: 39},
        {lng: 116.417185, lat: 39.929123, count: 11},
        {lng: 116.417237, lat: 39.927518, count: 9},
        {lng: 116.417784, lat: 39.915754, count: 47},
        {lng: 116.420193, lat: 39.917061, count: 52},
        {lng: 116.422735, lat: 39.915619, count: 100},
        {lng: 116.418495, lat: 39.915958, count: 46},
        {lng: 116.416292, lat: 39.931166, count: 9},
        {lng: 116.419916, lat: 39.924055, count: 8},
        {lng: 116.42189, lat: 39.921308, count: 11},
        {lng: 116.413765, lat: 39.929376, count: 3},
        {lng: 116.418232, lat: 39.920348, count: 50},
        {lng: 116.417554, lat: 39.930511, count: 15},
        {lng: 116.418568, lat: 39.918161, count: 23},
        {lng: 116.413461, lat: 39.926306, count: 3},
        {lng: 116.42232, lat: 39.92161, count: 13},
        {lng: 116.4174, lat: 39.928616, count: 6},
        {lng: 116.424679, lat: 39.915499, count: 21},
        {lng: 116.42171, lat: 39.915738, count: 29},
        {lng: 116.417836, lat: 39.916998, count: 99},
        {lng: 116.420755, lat: 39.928001, count: 10},
        {lng: 116.414077, lat: 39.930655, count: 14},
        {lng: 116.426092, lat: 39.922995, count: 16},
        {lng: 116.41535, lat: 39.931054, count: 15},
        {lng: 116.413022, lat: 39.921895, count: 13},
        {lng: 116.415551, lat: 39.913373, count: 17},
        {lng: 116.421191, lat: 39.926572, count: 1},
        {lng: 116.419612, lat: 39.917119, count: 9},
        {lng: 116.418237, lat: 39.921337, count: 54},
        {lng: 116.423776, lat: 39.921919, count: 26},
        {lng: 116.417694, lat: 39.92536, count: 17},
        {lng: 116.415377, lat: 39.914137, count: 19},
        {lng: 116.417434, lat: 39.914394, count: 43},
        {lng: 116.42588, lat: 39.922622, count: 27},
        {lng: 116.418345, lat: 39.919467, count: 8},
        {lng: 116.426883, lat: 39.917171, count: 3},
        {lng: 116.423877, lat: 39.916659, count: 34},
        {lng: 116.415712, lat: 39.915613, count: 14},
        {lng: 116.419869, lat: 39.931416, count: 12},
        {lng: 116.416956, lat: 39.925377, count: 11},
        {lng: 116.42066, lat: 39.925017, count: 38},
        {lng: 116.416244, lat: 39.920215, count: 91},
        {lng: 116.41929, lat: 39.915908, count: 54},
        {lng: 116.422116, lat: 39.919658, count: 21},
        {lng: 116.4183, lat: 39.925015, count: 15},
        {lng: 116.421969, lat: 39.913527, count: 3},
        {lng: 116.422936, lat: 39.921854, count: 24},
        {lng: 116.41905, lat: 39.929217, count: 12},
        {lng: 116.424579, lat: 39.914987, count: 57},
        {lng: 116.42076, lat: 39.915251, count: 70},
        {lng: 116.425867, lat: 39.918989, count: 8}
      ]
    }
  }
}
</script>