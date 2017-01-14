<template lang="pug">
div
  .container-is-fluid
    .hero.is-primary
      .hero-body
        .container
          h1.title VUE BAIDU MAP
            span &nbsp;&nbsp;
            a.button.is-small.is-light.is-strong.is-outlined(href="https://github.com/Dafrok/vue-baidu-map")
              span.icon.is-small
                i.fa.fa-star
              strong &nbsp;Star
            span &nbsp;&nbsp;
            a.button.is-small.is-light.is-outlined(href="https://github.com/Dafrok/vue-baidu-map/fork")
              span.icon.is-small
                i.fa.fa-github
              strong &nbsp;Fork
          h2.subtitle Baidu Map component for Vue 2.0
  .container.is-fluid
    .hero.is-primary
  .container.is-fluid
    section.section
      .columns
        .column.is-2
          aside.menu
            p.menu-label DOCUMENTATION
            ul.menu-list
              li
                router-link(to="/start") 开始使用
              li
                router-link(to="/map") 基础地图
              li
                router-link(to="/controls") 地图控件
              <!--
              router-link(to="/") 覆盖物
              router-link(to="/") 信息窗口
              router-link(to="/") 右键菜单
              router-link(to="/") 鼠标操作
              router-link(to="/") 叠加层
              router-link(to="/") 事件
              router-link(to="/") GPS
              router-link(to="/") 全景图
              router-link(to="/") 个性化
              router-link(to="/") 检索
              router-link(to="/") 公交检索
              router-link(to="/") 驾车路线规划
              router-link(to="/") 地址解析
              router-link(to="/") 鼠标操作
              router-link(to="/") 坐标转换
              router-link(to="/") 输入提示
              router-link(to="/") 鼠标操作
              router-link(to="/") 定位-->
        .column.is-10
          router-view.doc.markdown-body
</template>

<script>
import 'github-markdown-css'
import '../../../node_modules/highlight.js/styles/github.css'
export default {
}
</script>

<style lang="sass">
$primary:#0075c7;
@import 'bulma';

.map {
  width: 100%;
  padding-top: 50%;
}
</style>