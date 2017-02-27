<template lang="pug">
div
  slot
</template>

<script>
export default {
  name: 'map-context-menu',
  props: {
    width: {
      type: Number
    }
  },
  methods: {
    addContextMenu (BMap, parent, map) {
      const menu = this.menu = new BMap.ContextMenu()
      this.parent = parent
      for (let item of this.$children) {
        if (item.seperator) {
          menu.addSeparator()
          continue
        }
        const menuItem = new BMap.MenuItem(item.text, function (point, pixel) {
          item.callback({
            point,
            pixel,
            BMap,
            map,
            target: parent
          })
        }, {
          width: this.width,
          id: item.id,
          iconUrl: item.iconUrl
        })
        item.disabled ? menuItem.disable() : menuItem.enable()
        menu.addItem(menuItem)
      }

      parent.addContextMenu(menu)
    },
    removeContextMenu () {
      this.parent.removeContextMenu(this.menu)
    },
    reloadContextMenu () {
      this.parent && this.$nextTick(() => {
        const {$parent, removeContextMenu, addContextMenu} = this
        removeContextMenu()
        addContextMenu ($parent.BMap || $parent.$parent.BMap, $parent.map || $parent.overlay, $parent.map || $parent.$parentmap)
      })
    }
  },
  mounted () {
    let map
    let BMap
    const {addContextMenu, $parent} = this
    switch ($parent.$options._componentTag) {
      case 'map-view':
        map = $parent.map
        map ? addContextMenu() : $parent.$on('ready', () => addContextMenu($parent.BMap, $parent.map, $parent.map))
        break;
      case 'map-overlay-marker':
        map = $parent.$parent.map
        map ? addContextMenu() : $parent.$parent.$on('ready', () => addContextMenu($parent.$parent.BMap, $parent.overlay, $parent.$parent.map))
        break;
    }
  },
  beforeDestroy () {
    this.removeContextMenu()
  }
}
</script>