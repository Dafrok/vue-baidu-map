<template lang="pug">
div.demo-card-wide.mdl-card.mdl-shadow--4dp
  slot
  slot(name="bottom")
</template>

<style lang="stylus" scoped>
.mdl-card 
  overflow hidden
  width 100%
.mdl-card__title 
  background-color #f2f2f2
.mdl-spinner 
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  margin auto
.mdl-textfield 
  width 100%
</style>
