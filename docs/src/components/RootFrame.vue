<template lang="pug">
div.mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header
  header.mdl-layout__header
    .mdl-layout__header-row
      span.mdl-layout-title VUE BAIDU MAP
      //-   img.logo(src='../../favicon.png')
      .mdl-layout-spacer
      //- .mdl-textfield.mdl-js-textfield.mdl-textfield--expandable.mdl-textfield--floating-label.mdl-textfield--align-right
      //-   label.mdl-button.mdl-js-button.mdl-button--icon(for="fixed-header-drawer-exp")
      //-     i.material-icons search
      //-   .mdl-textfield__expandable-holder
      //-     input#fixed-header-drawer-exp.mdl-textfield__input(type="text", name="sample")
      .mdl-navigation
        a.mdl-button.mdl-js-button.mdl-button--icon(href="https://github.com/Dafrok/vue-baidu-map")
          i.material-icons.iconfont.icon-star
        a.mdl-button.mdl-js-button.mdl-button--icon(href="https://github.com/Dafrok/vue-baidu-map")
          i.material-icons.iconfont.icon-github
  div.mdl-layout__drawer(@click="close", ref="drawer")
    router-link(to="/").logo
      img(src="../../favicon.png")
    slot(name="navigation")
  main.mdl-layout__content(ref="main")
    .page-content
      slot(name="page-content")
</template>

<style lang="sass" scoped>
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
  methods: {
    close () {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
      this.$refs.drawer.classList.remove('is-visible')
    }
  },
  mounted () {
    this.$router.afterEach(route => {
      this.$refs.main.scrollTop = 0
      this.$nextTick(global.componentHandler.upgradeDom)
    })
  }
}
</script>