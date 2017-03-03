# 地图视图

`MapView` 是用于渲染百度地图实例可视化区域的容器，通常与 `LocalSearch` 等会输出其它视图的组件结合使用。\
当 `BaiduMap` 组件中没有挂载 `MapView` 组件时，百度地图实例将渲染在 `<baidu-map>` 节点上。\
当 `BaiduMap` 挂载了 `MapView` 组件时，百度地图实例将渲染在 `<map-view>` 节点上。\
每个 `BaiduMap` 组件应对应唯一一个 `MapView` 组件，如果声明了多个 `MapView` 组件，只有第一个能被正常渲染。
该组件主要用于控制布局。除了能够渲染地图视图以外，没有任何其它用途。

## 示例

### 使用 `MapView` 渲染一个地图实例

#### 代码
```html
<doc-preview>
  <baidu-map slot="map" class="map">
    <p style="text-indent: 20px; line-height: 60px;">以下是使用 `map-view` 组件渲染的百度地图实例</p>
    <map-view style="position: absolute; top: 60px; bottom: 20px; left: 20px; right: 20px"></map-view>
  </baidu-map>
</doc-preview>
```

#### 预览
<doc-preview>
  <baidu-map slot="map" class="map">
    <p style="text-indent: 20px; line-height: 60px;">以下是使用 `map-view` 组件渲染的百度地图实例</p>
    <map-view style="position: absolute; top: 60px; bottom: 20px; left: 20px; right: 20px"></map-view>
  </baidu-map>
</doc-preview>


