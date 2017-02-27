<template lang="pug">
span
  slot
</template>
<script>
export default {
  name: 'map-context-menu-item',
  props: {
    callback: {
      type: Function,
      default: new Function
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
      this.$parent.reloadContextMenu()
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