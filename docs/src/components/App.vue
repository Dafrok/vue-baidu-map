<template lang="pug">
root-frame
  drawer(slot="navigation")
    nav
      div.cate(v-for="route in routeMap")
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
  computed: {
    routeMap () {
      const ret = []
      for (const route of routeMap) {
        if (route.meta !== 'hidden') {
          ret.push(route)
        }
      }
      return ret
    }
  }
}
</script>

<style lang="sass">
.map img {
  max-width: none!important;
  background: none!important;
}

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
  padding: 2rem;
  blockquote {
    &::before {
      content: none;
    }
    &::after {
      content: none;
    }
  }
}

.map {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.mdl-list__item {
  &.title {
    background-color: #f2f2f2;
    color: #555;
  }
}
.mdl-navigation__link.is-active {
  background-color: #e2e2e2;
}
</style>