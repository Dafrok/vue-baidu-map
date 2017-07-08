<template>
<div class="text-field">
  <label>
    <div v-text="label" class="label"></div>
    <div class="input"><input :value="value" :placeholder="placeholder" :pattern="pattern" @input="$emit('input', $event.target.value)"></div>
  </label>
</div>
</template>

<script>
export default {
  props: ['label', 'value', 'pattern', 'placeholder']
}
</script>

<style lang="stylus" scoped>
.text-field
  box-sizing border-box
  font-size 0
  display inline-block
  width 100%
  .label
    font-size .75rem
  .input
    font-size 0
    overflow hidden
    box-sizing border-box
    border-radius 3px
    border 1px solid #ccc
    box-shadow 0 0 2px silver inset
    background white
    height 2rem
    line-height 2rem
  input
    box-sizing border-box
    padding 0 .5rem
    width 100%
    margin 0
    border 0
    outline 0
    height 100%
    background transparent
  label
    font-size 1rem
</style>
