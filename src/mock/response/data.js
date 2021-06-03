import { doCustomTimes } from '@/lib/tools'
import Mock from 'mockjs'
export const getTableData = () => {
  const template = {
    name: '@name',
    'age|18-25': 0,
    email: '@email'
  }
  const arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

export const getFileList = () => {
  const template = {
    'name|5': '@cword',
    create_time: '@datetime',
    'folder_id|1-6': 0,
    'id|+1': 10000
  }
  const arr = []
  doCustomTimes(15, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

export const getFolderList = () => {
  const template1 = {
    'name|1': '@word',
    create_time: '@datetime',
    folder_id: 0,
    'id|+1': 1
  }
  const template2 = {
    'name|1': '@word',
    create_time: '@datetime',
    'folder_id|+1': 1,
    'id|+1': 4
  }
  const arr = []
  doCustomTimes(3, () => {
    arr.push(Mock.mock(template1))
  })
  doCustomTimes(2, () => {
    arr.push(Mock.mock(template2))
  })
  return arr
}
