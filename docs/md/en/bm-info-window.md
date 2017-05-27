<template lang="markdown">

# Info Window Overlay

`BmInfoWindow` component renders the child nodes in slot mode. 
If your browser supports the `MutationObserver` function, the size of the info windows are automatically adjusted when you update the child nodes. If it's not supported, you need to manually call the instance function `redraw ()` to update view.

## Instance Properties

|name|type|default|description|
|------|:---:|:---:|----|
|show|Boolean|false|Whether the info window is opened or not.|
|position|Point||Position of the info window.|
|width|Number||Width of the info window. Ranges: 0, 220 - 730.|
|height|Number||Height of the info window. Ranges:0, 60 - 650.|
|maxWidth|Number||MaxWidth of the info window.|
|offset|Size||Offset of the info window.|
|title|String||Title message of the info window.|
|autoPan|Boolean|true|Whether auto moving when info window is opened.|
|closeOnClick|Boolean|true|Whether close the info window when clicking on the map.|
|message|String||Custom SMS content.|
|maximize|Boolean|false|Enable maximize.|

## Events

|name|parameter|description|
|------|:--:|----|
|close|event{type, target, point}|Triggers when the info window is closed.|
|open|event{type, target, point}|Triggers when the info window is opened.|
|maximize|event{type, target}|Triggers when the info window is maximized.|
|restore|event{type, target}|Triggers when the info window is restored.|
|clickclose|event{type, target}|Triggers when clicking the close button in the info window.|

## Examples

### Add a info window on the map

#### Code

```html
<template>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
      <p v-text="infoWindow.contents"></p>
      <button @click="clear">Clear</button>
    </bm-info-window>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bm-info-window :position="{lng: 116.404, lat: 39.915}" title="Info Window Title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
      <p v-text="infoWindow.contents"></p>
      <button @click="clear">Clear</button>
    </bm-info-window>
  </baidu-map>
  <div class="toolbar">
    <table>
      <thead>
        <tr>
          <th><label><input type="checkbox" v-model="infoWindow.show">信息窗体内容</label></th>
        <tr>
      </thead>
      <tbody>
        <tr>
          <td><text-field v-model="infoWindow.contents"></text-field></td>
        </tr>
      </tbody>
    </table>
  </div>
</doc-preview>

</template>

<script>
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
}
</script>
