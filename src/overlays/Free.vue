<template lang="pug">
div
  slot
</template>

<script>
import commonMixin from '@/base/mixins/common.js'
import bindEvents from '@/base/bindEvent.js'
import {createPoint, createSize} from '@/base/factory.js'

export default {
  name: 'bm-info-window',
  mixins: [commonMixin('overlay')],
  props: {
    message: {
      type: String
    }
  },
  methods: {
    redraw () {
      this.originInstance.redraw()
    }
  },
  mounted: function () {
      console.log(this)
  }
}
</script>
