<template lang="pug">
div
  md-whiteframe(md-tag="md-toolbar").top
    .md-toolbar-container
      md-button.menu-button.md-icon-button(@click="$refs.sidenav.toggle()")
        md-icon menu
      span.md-title(v-text="title") VUE BAIDU MAP
      md-button.md-icon-button
        router-link.link(:to="`/${otherLang}/index`", @click="changeLang")
        md-icon(md-iconset="iconfont icon-zhongyingwenqiehuan-xianshizhongyingwen")
      md-button.md-icon-button(href="https://github.com/Dafrok/vue-baidu-map")
        md-icon(md-iconset="iconfont icon-github")
  md-sidenav.md-left.md-fixed.main-nav(ref="sidenav")
    md-toolbar(md-theme="white").logo
      router-link.link(:to="`/`")
        img(src="//dafrok.github.io/vue-baidu-map/favicon.png")
        div Vue Baidu Map
    slot(name="side-nav")
  .page-content
    slot(name="page-content")
</template>

<style lang="stylus" scoped>
.top
  position fixed
  top 0
  left 0
  right 0
  z-index 2
.logo
  font-size 1.5rem
  border-bottom 1px solid rgba(0,0,0,.12)
  height 12rem
  justify-content center
  text-align center
  a.link:hover
    text-decoration none
  img
    width 90px
    margin-bottom 1rem
.md-icon-button
  a.link
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index 1
    display block
    opacity 0
.md-title
  flex 1
.page-content
  padding-top 64px
@media(min-width: 1281px)
  .md-title
    margin-left 8px!important
  .top
    left 304px
</style>

<script>
export default {
  props: ['lang'],
  data () {
    return {
      title: this.$route.name
    }
  },
  methods: {
    changeLang () {
      this.$emit('changeLang', this.otherLang)
    }
  },
  computed: {
    otherLang () {
      return this.lang === 'zh' ? 'en' : 'zh'
    }
  },
  mounted () {
    this.$router.afterEach(route => {
      this.$nextTick(() => {
        const $table = [].filter.call(this.$el.getElementsByTagName('table'), $t => !~$t.parentNode.classList.value.indexOf('md-table'))
        $table.forEach($t => {
          $t.outerHTML = `<div class="doc-table md-table md-theme-default md-whiteframe md-whiteframe-1dp">${$t.outerHTML}</div>`
        })
      })
      const meta = this.$route.meta || {}
      this.$emit('changeLang', meta.lang)
      document.body.scrollTop = 0
      this.title = route.name
      this.$refs.sidenav.close()
    })
  }
}
</script>
