<template lang="pug">
div
  slot
</template>

<script>
import commonMixin from '@/base/mixins/common.js'

export default {
  name: 'bm-context-menu',
  props: {
    width: {
      type: Number
    }
  },
  mixins: [commonMixin('contextMenu')],
  methods: {
    load () {
      const {width, BMap, map, $parent} = this
      const menu = this.originInstance = new BMap.ContextMenu()
      const parent = this.parent = $parent.originInstance || map
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
          width,
          id: item.id,
          iconUrl: item.iconUrl
        })
        item.disabled ? menuItem.disable() : menuItem.enable()
        menu.addItem(menuItem)
      }
      parent.addContextMenu(menu)
    }
  }
}
</script>
