# 第三方组件

第三方组件是对基于百度地图 JS API 开发的开源库的封装，该分类中的组件不参与全局注册，请根据使用频度需求自行进行全局 / 局部注册。

## 示例

### 全局注册

```javascript
import Vue from 'vue'
import {BmlMarkerClusterer} from 'vue-baidu-map'

Vue.component('bml-marker-cluster', BmlMarkerClusterer)
```

### 局部注册

```javascript
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {
  components: {
    BmlMarkerClusterer
  }
}
```
