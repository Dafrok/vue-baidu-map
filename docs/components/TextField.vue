<template>
<div class="text-field">
  <label>
    <div v-text="label" class="label"></div>
    <div class="input"><input :value="value" :pattern="pattern" @input="$emit('input', $event.target.value)"></div>
  </label>
</div>
</template>

<script>
export default {
  props: ['label', 'value', 'pattern']
}
</script>

<style lang="stylus" scoped>
.text-field
  box-sizing border-box
  font-size 0
  display inline-block
  width 100%
  padding 0 10px
  .label
    font-size .75rem
  .input
    overflow hidden
    box-sizing border-box
    border-radius 3px
    border 1px solid #ccc
    padding 3px 5px;
    box-shadow 0 0 2px silver inset
    background white
  input
    width 100%
    padding 0
    margin 0
    border 0
    outline 0
  label
    font-size 1rem
</style>
