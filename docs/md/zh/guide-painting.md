# 图形绘制

## 说明

由于 MVVM 数据驱动视图的特性，地图中的图形绘制不再需要使用 `BMapLib.DrawingManager` 等第三方工具库来实现。

## 示例

### 绘制折线

#### 代码

```html
<baidu-map class="map"
  :center="{lng: 116.404, lat: 39.915}"
  :zoom="14"
  @mousemove="syncPolyline"
  @click="paintPolyline"
  @rightclick="newPolyline">
  <bm-control>
    <button @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>
  </bm-control>
  <bm-polyline :path="path" v-for="path of polyline.paths"></bm-polyline>
</baidu-map>

<script>
export default {
  data () {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    }
  },
  methods: {
    toggle (name) {
      this[name].editing = !this[name].editing
    },
    syncPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if (!paths.length) {
        return
      }
      const path = paths[paths.length - 1]
      if (!path.length) {
        return
      }
      if (path.length === 1) {
        path.push(e.point)
      }
      this.$set(path, path.length - 1, e.point)
    },
    newPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if(!paths.length) {
        paths.push([])
      }
      const path = paths[paths.length - 1]
      path.pop()
      if (path.length) {
        paths.push([])
      }
    },
    paintPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      !paths.length && paths.push([])
      paths[paths.length - 1].push(e.point)
    }
  }
}
</script>
```

#### 预览

<baidu-map class="map"
  :center="{lng: 116.404, lat: 39.915}"
  :zoom="14"
  @mousemove="syncPolyline"
  @click="paintPolyline"
  @rightclick="newPolyline">
  <bm-control>
    <md-button class="md-raised md-primary" @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</md-button>
  </bm-control>
  <bm-polyline :path="path" v-for="path of polyline.paths"></bm-polyline>
</baidu-map>

<script>
export default {
  data () {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    }
  },
  methods: {
    toggle (name) {
      this[name].editing = !this[name].editing
    },
    syncPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if (!paths.length) {
        return
      }
      const path = paths[paths.length - 1]
      if (!path.length) {
        return
      }
      if (path.length === 1) {
        path.push(e.point)
      }
      // path[path.length - 1] = e.point
      this.$set(path, path.length - 1, e.point)
      // paths[0][0] = e.point
    },
    newPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if(!paths.length) {
        paths.push([])
      }
      const path = paths[paths.length - 1]
      path.pop()
      if (path.length) {
        paths.push([])
      }
    },
    paintPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      !paths.length && paths.push([])
      paths[paths.length - 1].push(e.point)
    }
  }
}
</script>
