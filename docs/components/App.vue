<template lang="pug">
div
  router-view(v-show="isIndex")
  root-frame.root(v-show="!isIndex", :lang="lang", @changeLang="changeLang")
    navigator(:lang="lang", slot="side-nav")
    router-view(slot="page-content").doc.markdown-body
</template>

<script>
import RootFrame from './RootFrame.vue'
import Navigator from './Navigator.vue'

export default {
  components: {
    Navigator,
    RootFrame
  },
  data () {
    return {
      lang: 'zh'
    }
  },
  methods: {
    changeLang (lang) {
      this.lang = lang
    }
  },
  computed: {
    isIndex () {
      return this.$route.fullPath === '/'
    }
  }
}
</script>

<style lang="stylus">
::-webkit-scrollbar
  width 0

h1.title {
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    margin-right: 1rem
  }
  .logo, span, a {
    vertical-align: middle;
  }
}

.is-fixed-top {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
}

h2 {
  transition: all 1s;
  &.active {
    color: #0075c7;
    text-shadow: 0 0 10px silver;
    transform: translateX(1rem);
  }
}

.doc {
  padding: 0 2rem 2rem;
  blockquote {
    &::before {
      content: none;
    }
    &::after {
      content: none;
    }
  }
}

.map
  width 100%
  height 300px
  img
    max-width: none!important
    background: none!important
  svg
    max-width initial
  canvas
    max-width initial

@media(min-width: 1281px)
  .md-sidenav-backdrop
    display none
  .root
    padding-left 304px
  .main-nav
    .md-sidenav-content
      box-shadow 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)
      pointer-events auto!important
      transform translate3D(0, 0, 0)!important
  .menu-button
    display none!important
</style>
