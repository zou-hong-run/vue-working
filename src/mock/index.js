import Mock from 'mockjs'
import {
  getUserInfo
} from './response/user'
const Random = Mock.Random
// 拦截请求
Mock.mock('/getUserInfo', 'post', getUserInfo)
// 模拟数据延迟
Mock.setup({
  timeout: 100
})
Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'grape']
    return this.pick(fruit)
  }
})
export default Mock
