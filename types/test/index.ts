import Vue from 'vue'

import BaiduMap from '../index'
// import {BaiduMap} from '../index'
import { BmControl } from '../index'

Vue.use(BaiduMap, {
  ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'
})

const a = new BmControl()