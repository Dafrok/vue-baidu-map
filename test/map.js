import Vue from 'vue'
import BaiduMap from '../components/index.js'
import {expect} from 'chai'
import {createApp} from './util/util.js'

describe('Regist', () => {
  it('global regist', done => {
    Vue.use(BaiduMap, {ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'})
    const app = createApp({})
    expect(app._BMap().ak).equal('oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih')
    done()
  })
})

// describe('Map', () => {
//   it('load map component', done => createApp({
//       template: `<baidu-map @ready="test"></baidu-map>`,
//       methods: {
//         test ({BMap, map}) {
//           expect(map.loaded).equal(true)
//           expect(BMap).equal(global.BMap)
//           done()
//         }
//       }
//     })).timeout(5000)

//   it('load map component with ak', done => createApp({
//       template: `<baidu-map ak="oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih" @ready="test"></baidu-map>`,
//       methods: {
//         test ({BMap, map}) {
//           expect(map.loaded).equal(true)
//           expect(BMap).equal(global.BMap)
//           done()
//         }
//       }
//     })).timeout(5000)
// })