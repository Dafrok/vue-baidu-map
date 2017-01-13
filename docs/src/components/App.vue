<template lang="pug">
div.app
  nav.nav
    router-link(to="/start") 开始使用
    router-link(to="/map") 基础地图
    router-link(to="/controls") 地图控件
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
    router-link(to="/") 定位
  router-view.doc.markdown-body
</template>

<script>
import css from 'github-markdown-css'
export default {
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body, .app {
  width: 100%;
  height: 100%;
  margin: 0;
}
.nav {
  background: #f7f9fd;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  overflow: auto;
}
.nav a {
  display: block;
  color: #555;
  padding: 10px 20px;
  text-decoration: none;
}
.nav a:hover {
  color: #0075c7;
}
.doc {
  border-left: 200px solid transparent;
  height: 100%;
  padding: 20px;
}
.map {
  margin: 0 auto;
  width:100%;
  padding-top: 50%;
}
</style>