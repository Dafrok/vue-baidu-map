<template lang="pug">
span
  slot
    input
</template>

<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'

export default {
  name: 'bm-autocomplete',
  mixins: [commonMixin()],
  props: {
    types: {
      type: String
    },
    location: {
      type: String
    }
  },
  watch: {
    types () {
      this.reload()
    },
    location () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, $el, types, location} = this
      const input = $el.querySelector('input')
      if (!input) {
        return
      }
      this.originInstance = new BMap.Autocomplete({
        input,
        types,
        location: location || map,
        onSearchComplete: e => this.$emit('searchcomplete', e)
      })
      bindEvents.call(this, this.originInstance)
    }
  }
}
</script>
