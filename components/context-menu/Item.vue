<template>
<span>
  <slot></slot>
</span>
</template>
<script>
export default {
  name: 'bm-context-menu-item',
  props: {
    callback: {
      type: Function,
      default: function () {}
    },
    text: {
      type: String
    },
    iconUrl: {
      type: String
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    seperator: {
      type: Boolean
    }
  },
  methods: {
    reload () {
      this.$parent.map && this.$parent.load()
    }
  },
  watch: {
    text () {
      this.reload()
    },
    iconUrl () {
      this.reload()
    },
    id () {
      this.reload()
    },
    disabled () {
      this.reload()
    },
    iseperator () {
      this.reload()
    },
    callback () {
      this.reload()
    }
  },
  destroyed () {
    this.reload()
  },
  mounted () {
    this.reload()
  }
}
</script>
