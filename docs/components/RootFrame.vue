<template lang="pug">
div.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header
  header.mdl-layout__header
    .mdl-layout__header-row
      span.mdl-layout-title(v-text="title") VUE BAIDU MAP
      .mdl-layout-spacer
      .mdl-navigation
        router-link(:to="`/${otherLang}/index`", @click="changeLang").mdl-button.mdl-js-button.mdl-button--icon
          i.material-icons.iconfont.icon-zhongyingwenqiehuan-xianshizhongyingwen
        a.mdl-button.mdl-js-button.mdl-button--icon(href="https://github.com/Dafrok/vue-baidu-map")
          i.material-icons.iconfont.icon-github
  div.mdl-layout__drawer(@click="close", ref="drawer")
    router-link(:to="`/${lang}/index`").logo
      img(src="//dafrok.github.io/vue-baidu-map/favicon.png")
    slot(name="navigation")
  main.mdl-layout__content(ref="main")
    .page-content
      slot(name="page-content")
</template>

<style lang="stylus" scoped>
.logo {
  display: block;
  text-align: center;
  margin-top: 1rem;
  transition: all .3s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 70px;
    height: 70px;
  }
}
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
    },
    close () {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
      this.$refs.drawer.classList.remove('is-visible')
    }
  },
  computed: {
    otherLang () {
      return this.lang === 'zh' ? 'en' : 'zh'
    }
  },
  mounted () {
    this.$router.afterEach(route => {
      const meta = this.$route.meta || {}
      this.$emit('changeLang', meta.lang)
      this.$refs.main.scrollTop = 0
      this.$nextTick(global.componentHandler.upgradeDom)
      this.title = route.name
    })
  }
}
</script>
