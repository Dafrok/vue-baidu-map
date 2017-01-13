<script>
export default {
  render (h) {
    return
  },
  props: {
    anchor: {
      type: String,
    },
    offset: {
      type: Object
    },
    size: {
      type: Object
    },
    value: {
      type: Object,
      default () {
        return {
          isOpen: false
        }
      }
    }
  },
  watch: {
    anchor () {
      this.reloadControl()
    },
    offset () {
      this.reloadControl()
    },
    size () {
      this.reloadControl()
    },
    'value.isOpen' () {
      this.reloadControl()
    }
  },
  methods: {
    addControl () {
      const {BMap, map} = this.$parent
      const mapTypes = []
      this.mapTypes && this.mapTypes.forEach(item => {
        mapTypes.push(global[item])
      })
      this.control = new BMap.OverviewMapControl({
        anchor: global[this.anchor],
        offset: this.offset,
        size: this.size,
        isOpen: this.value.isOpen
      })
      this.control.addEventListener('viewchanged', ({type, target, isOpen}) => {
        this.$emit('input', {isOpen})
      })
      map.addControl(this.control)
    },
    removeControl () {
      this.$nextTick(() => {
        const {BMap, map} = this.$parent
        map.removeControl(this.control)
      })
    },
    reloadControl () {
      this.$nextTick(() => {
        this.removeControl()
        this.addControl()
      })
    }
  },
  mounted () {
    this.$parent.$on('ready', () => {
      this.addControl()
    })
  },
  beforeDestroy () {
    this.removeControl()
  }
}
</script>