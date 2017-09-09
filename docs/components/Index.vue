<template lang="pug">
section.index
  .content
    img(src='//dafrok.github.io/vue-baidu-map/favicon.png')
    h1 VUE BAIDU MAP
    .links
      router-link(to="/zh/index") 中文
      router-link(to="/en/index") English
</template>

<style lang="stylus" scoped>
.index
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 9999
  background url('../index.jpg') no-repeat center center
  background-size cover
  text-align center
  .content
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    margin auto
    h1
      color white
      text-shadow 0 0 6px #333
      white-space nowrap
    img
      width 200px
    a
      display inline-block
      box-shadow 0 0 3px #3f51b5
      color white
      border-radius 100px
      margin 10px
      padding 10px
      background #3f51b5
      text-decoration none
      width 100px
      &:hover
        box-shadow 0 0 10px #3f51b5
        background white
        color #3f51b5
</style>
