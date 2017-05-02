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

const getParent = $component => $component.abstract ? getParent($component.$parent) : $component

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
      transmitEvent (e) {
        this.$emit(e.type.replace(/^on/, ''), e)
      },
      reload () {
        this && this.BMap && this.$nextTick(() => {
          this.unload()
          this.$nextTick(this.load)
        })
      },
      unload () {
        const {map, originInstance} = this
        try {
          prop.type === 'search' && originInstance.clearResults()
          map[types[prop.type].unload](originInstance)
        } catch (e) {}
      }
    }
    this.mounted = function () {
      const map = getParent(this.$parent).map
      const {ready} = this
      map ? ready() : this.$parent.$on('ready', ready)
    }
    this.beforeDestroy = function () {
      this.unload()
    }
  }
}

export default type => new Mixin({type})
