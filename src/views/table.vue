<template>
  <div>
    <!-- <edit-table
      v-model="tableData"
      :columns="columns"
      @on-edit="handleEdit"
    /> -->
    <edit-table-mul
      v-model="tableData"
      :columns="columns"
    />
  </div>
</template>
<script>
import { getTableData } from '@/api/data'
// import EditTable from '_c/edit-table'
import EditTableMul from '_c/edit-table-mul'

export default {
  components: {
    // EditTable,
    EditTableMul
  },
  data () {
    return {
      tableData: [],
      testData: [],
      columns: [
        { key: 'name', title: '姓名' }, // 自定义editable字段
        { key: 'age', title: '年龄', editable: true },
        { key: 'email', title: '邮箱', editable: true }
      ]
    }
  },
  mounted () {
    getTableData().then(res => {
      // console.log(res.data)
      this.tableData = res.data
    })
  },
  methods: {
    handleEdit ({ row, index, column, newValue }) {
      console.log(row, index, column, newValue)
    }
  }
}
</script>
