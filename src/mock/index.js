import Mock from 'mockjs'
import {
  getUserInfo
} from './response/user'
import {
  getTableData,
  getFileList,
  getFolderList
} from './response/data'
const Random = Mock.Random
// 拦截请求
Mock.mock('/getUserInfo', 'post', getUserInfo)
Mock.mock('/getTableData', 'get', getTableData)
Mock.mock('/getFileList', 'get', getFileList)
Mock.mock('/getFolderList', 'get', getFolderList)

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
