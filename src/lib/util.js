import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'

export const setTitle = (title) => {
  window.document.title = title || 'redrun-admin'
}
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}
export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
/**
 *
 * @param {文件夹列表} folderList
 * @param {文件列表} fileList
 * @returns {处理后的文件树}
 */
export const putFileInFolder = (folderList, fileList) => {
  // console.log(folderList, fileList);
  const folderListCloned = clonedeep(folderList)
  const fileListCloned = clonedeep(fileList)
  // 遍历文件夹列表中的每一项，然后做响应处理
  const newFolderList = folderListCloned.map((folderItem) => {
    // 得到文件夹列表的id
    const folderId = folderItem.id
    // 得到文件列表的长度
    let index = fileListCloned.length // 15
    // 每次循环index减少 倒叙
    while (--index >= 0) {
      // 文件列表中的最后一项
      const fileItem = fileListCloned[index]
      // 文件最后一项的id 是否 等于文件夹的id
      if (fileItem.folder_id === folderId) {
        // 从文件列表中删除这个文件并返回这文件
        const file = fileListCloned.splice(index, 1)[0]
        // 给文件添加一个标题
        file.title = file.name
        // 有children属性（数组），将数组中推入文件
        if (folderItem.children) folderItem.children.push(file)
        // 没有children给文件夹添加children属性并赋值
        else folderItem.children = [file]
      }
    }
    // 判断文件类型
    folderItem.type = 'folder'
    return folderItem
  })
  // 即兴发挥，把没有父文件夹的文件，放在和文件夹一个位置
  // let arr = []
  // let newnewFolderList = newFolderList.map(newItem=>{
  //   let i = fileListCloned.length
  //   while(--i>=0){
  //     const fileItem = fileListCloned[i]
  //     if(newItem.id!==fileItem.folder_id){
  //       const file = fileListCloned.splice(i, 1)[0]
  //       arr.push(file)
  //     }
  //   }
  //   return newItem
  // })
  // arr = [...arr,newnewFolderList]
  // return arr
  return newFolderList
}
/**
 * 将文件夹转为文件夹树
 * @param {文件列表} folderList
 */
export const transferFolderToTree = folderList => {
  if (!folderList.length) return []
  const folderListCloned = clonedeep(folderList)
  // 传入id初始为零
  const handle = id => {
    const arr = []
    // 遍历原文件夹
    folderListCloned.forEach(folder => {
      // 遍历的文件夹项是否是，hanle所传入的级别，如果不是他就是该文件夹的孩子
      if (folder.folder_id === id) {
        // 递归调用handle（传入文件的id,和子文件的folder_id对应）返回的值赋给children
        const children = handle(folder.id) // 递归的尽头是 []
        if (folder.children) folder.children = [].concat(folder.children, children)
        else folder.children = children
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}
