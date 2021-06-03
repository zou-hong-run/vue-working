<template>
  <div class="folder-wrapper" />
</template>
<script>
import { getFolderList, getFileList } from '@/api/data'
import { putFileInFolder } from '@/lib/util'
export default {
  data () {
    return {
      folderList: [],
      fileList: []
    }
  },
  mounted () {
    Promise.all([
      getFolderList(),
      getFileList()
    ]).then(res => {
      console.log(putFileInFolder(res[0].data, res[1].data))
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
