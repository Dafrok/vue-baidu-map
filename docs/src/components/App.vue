<template lang="pug">
div(:style="rootStyle")
  header.container-is-fluid(:class="{'is-fixed-top': isFixed}")
    .hero.is-primary
      .hero-body(v-show="!isFixed")
        .container
          h1.title
            img.logo(src='../../favicon.png')
            span VUE BAIDU MAP
            span &nbsp;&nbsp;
            span(style="display: inline-block")
              a.button.is-small.is-light.is-strong.is-outlined(href="https://github.com/Dafrok/vue-baidu-map")
                span.icon.is-small
                  i.fa.fa-star
                strong &nbsp;Star
              span &nbsp;&nbsp;
              a.button.is-small.is-light.is-outlined(href="https://github.com/Dafrok/vue-baidu-map/fork")
                span.icon.is-small
                  i.fa.fa-github
                strong &nbsp;Fork
          h2.subtitle
            span Baidu Map component for Vue 2.0
      .hero-foot
        .container
          nav.tabs.is-boxed
            ul
              router-link(v-for="route in routeMap", :to="route.path", tag="li")
                a(v-text="route.name")
    nav.nav.has-shadow
      .container
        .nav-left
          a.nav-item.is-tab(v-for="item in subMenu", v-text="item.name", @click="scrollTo(item.$el)")
  .container
    section.section
      router-view.doc.markdown-body
</template>

<script>
import 'github-markdown-css'
import '../../../node_modules/highlight.js/styles/github.css'
import routeMap from '../routes.js'
export default {
  data () {
    return {
      isFixed: false,
      rootStyle: {
        paddingTop: 0
      },
      subMenu: []
    }
  },
  computed: {
    routeMap () {
      const ret = []
      for (const route of routeMap) {
        if (!route.redirect) {
          ret.push(route)
        }
      }
      return ret
    }
  },
  methods: {
    scrollTo ($el) {
      global.scrollTo(0, $el.offsetTop)
      $el.classList.add('active')
      setTimeout(() => {
        $el.classList.remove('active')
      }, 1e3)
    },
    loadSubMenu () {
      this.$nextTick(() => {
        this.subMenu.splice(0, this.subMenu.length)
        const $doc = document.querySelector('.doc')
        const $subDocs = $doc.querySelectorAll('h2')
        $subDocs.forEach(item => {
          this.subMenu.push({name: item.innerText, $el: item})
        })
      })
    }
  },
  mounted () {
    const {$router, loadSubMenu} = this
    loadSubMenu()
    const $header = document.querySelector('header')
    const $heroBody = document.querySelector('header .hero-body')
    const fixedHeight = $heroBody.clientHeight
    const headerHeight = $header.clientHeight
    global.addEventListener('scroll', e => {
      if (global.scrollY > fixedHeight) {
        this.isFixed = true
        this.rootStyle.paddingTop = `${headerHeight}px`
      } else {
        this.isFixed = false
        this.rootStyle.paddingTop = 0
      }
    })
    
    $router.afterEach(route => {
      loadSubMenu()
    })
  }
}
</script>

<style lang="sass">
$primary:#0075c7;
@import 'bulma';

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

.map {
  width: 100%;
  padding-top: 50%;
}
</style>