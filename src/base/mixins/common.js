const types = {
  control: {
    unload: 'removeControl'
  },
  layer: {
    unload: 'removeTileLayer'
  },
  overlay: {
    unload: 'removeOverlay'
  },
  contextMenu: {
    unload: 'removeContextMenu'
  }
}

class Mixin {
  constructor (prop) {
    this.methods = {
      ready () {
        const BMap = this.BMap = this.$parent.BMap
        const map = this.map = this.$parent.map
        this.load()
        this.$emit('ready', {
          BMap,
          map
        })
      },
      reload () {
        this && this.$nextTick(() => {
          this.unload()
          this.load()
        })
      },
      unload () {
        this.$nextTick(() => {
          const {map, originInstance} = this
          console.log(map[prop.type, types[prop.type].unload])
          try {
            map[types[prop.type].unload](this.originInstance)
          } catch (e) {}
        })
      }
    }
    this.mounted = function () {
      const {BMap, map} = this.$parent
      const {ready} = this
      map ? ready() : this.$parent.$on('ready', ready)
    }
    this.beforeDestroy = function () {
      this.unload()
    }
  }
}

export default type => new Mixin({type})