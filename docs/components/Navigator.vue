<template lang="pug">
md-list
  md-list-item(v-for="route in routeMap", v-if="route.name")
    span(v-text="route.name")
    md-list-expand
      md-list
        md-list-item.md-inset(v-for="subRoute in route.children")
          router-link(:to="`${route.path}/${subRoute.path}`", v-text="subRoute.name")
</template>

<script>
import routeMap from '../routes.js'
export default {
  props: ['lang'],
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
