import Vue from 'vue'
// import BaiduMap from '@/index.js'

export const createApp = ({template = `<baidu-map></baidu-map>`, methods = {}}) => {
  const $root = document.createElement('div')
  document.body.appendChild($root)
  return new Vue({
    el: $root,
    template,
    methods
  })
}
