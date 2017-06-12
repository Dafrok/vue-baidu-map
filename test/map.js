import Vue from 'vue'
import BaiduMap from '@/index.js'
import {expect} from 'chai'
import {createApp} from './util/util.js'

Vue.use(BaiduMap, {ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'})

describe('Map', () => {
  it('load map component', done => {
    createApp({
      template: `<baidu-map @ready="test"></baidu-map>`,
      methods: {
        test ({BMap, map}) {
          expect(map.loaded).equal(true)
          expect(BMap).equal(global.BMap)
          done()
        }
      }
    })
  })

  it('load map component with ak', done => {
    createApp({
      template: `<baidu-map ak="oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih" @ready="test"></baidu-map>`,
      methods: {
        test ({BMap, map}) {
          expect(map.loaded).equal(true)
          expect(BMap).equal(global.BMap)
          done()
        }
      }
    })
  })

  // it('render map with bm-view component', done => {
  //   const App = createApp()
  //   App.$on('ready', ({BMap, map}) => {
  //     expect(map.loaded).equal(true)
  //     expect(BMap).equal(global.BMap)
  //     done()
  //   })
  // })
})