<template lang="pug">
root-frame(:lang="lang", @changeLang="changeLang")
  drawer(slot="navigation")
    nav
      div.cate(v-for="route in routeMap", v-if="route.name")
        .mdl-list__item.title(v-text="route.name")
        router-link.mdl-navigation__link.sub(v-for="subRoute in route.children",  :to="`${route.path}/${subRoute.path}`", v-text="subRoute.name")
  router-view(slot="page-content").doc.markdown-body
</template>

<script>
import routeMap from '../routes.js'

import RootFrame from './RootFrame.vue'
import Drawer from './Drawer.vue'

export default {
  components: {
    RootFrame,
    Drawer
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
    routeMap () {
      const ret = []
      for (const route of routeMap) {
        if (!route.meta || (route.meta && !route.meta.hidden && route.meta.lang === this.lang)) {
          ret.push(route)
        }
      }
      return ret
    }
  }
}
</script>

<style lang="stylus">
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

.toolbar
  padding 1rem
  font-size 0
    font-size 1rem
  table
    thead
      tr
        th
          color white
          background #69c
          border-color #69c

.mdl-list__item {
  &.title {
    background-color: #f2f2f2;
    color: #555;
  }
}
.mdl-layout__drawer .mdl-navigation .mdl-navigation__link.is-active {
  font-weight: 700;
  color: #3f51b5;
  border-right: 2px solid #3f51b5;
}
</style>
