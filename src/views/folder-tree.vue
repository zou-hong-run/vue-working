<template>
  <div class="folder-wrapper">
    <Tree :data="folderTree" />
  </div>
</template>
<script>
import { getFolderList, getFileList } from '@/api/data'
import { putFileInFolder, transferFolderToTree } from '@/lib/util'
export default {
  data () {
    return {
      folderList: [],
      fileList: [],
      folderTree: []
    }
  },
  mounted () {
    Promise.all([
      getFolderList(),
      getFileList()
    ]).then(res => {
      this.folderTree = transferFolderToTree(putFileInFolder(res[0].data, res[1].data))
    })
  },
  methods: {

  }
}
</script>
<style lang="less">
  .folder-wrapper {
    width: 300px;
  }
</style>
