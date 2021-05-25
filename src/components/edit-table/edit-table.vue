<template>
  <Table
    :columns="insideColumns"
    :data="value"
  />
</template>
<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTable',
  props: {
    // 列的数据
    columns: {
      type: Array,
      default: () => []
    },
    // 每一行的数组
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      insideColumns: [],
      edittingId: '', // 点击按钮是时候edttingId才添加
      edittingContent: '' // input改变后的新值
    }
  },
  watch: {
    columns: function () {
      this.handleColumns()
    }
  },
  mounted () {
    this.handleColumns()
  },
  methods: {
    handleClick ({ row, index, column }) {
      if (this.edittingId === `${column.key}_${index}`) {
        // 深拷贝 原来的数据
        const tableData = clonedeep(this.value)
        // 要不要克隆？？？ 看原来的数据还使用吗，防止后面要使用，就克隆吧哈哈哈
        tableData[index][column.key] = this.edittingContent
        // 当前是编辑状态，点击保存新数据
        this.$emit('input', tableData)
        // 告诉父组件已经更新了
        this.$emit('on-edit', { row, index, column, newValue: this.edittingContent })
        this.edittingId = ''
        this.edittingContent = '' // 清除用户保存数据
      } else {
        // 点击 设置唯一的编号 类似于x,y坐标命名，判断是那一列哪一行
        this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput (newValue) {
      this.edittingContent = newValue
    },
    handleColumns () {
      const insideColumns = this.columns.map(item => { // item => age email 调用三次
      // 列数据没有传递render的情况
        if (!item.render && item.editable) {
        // columns里面的每一项都添加item.render
          item.render = (h, { row, index, column }) => { // 行数据，索引，列数据
          // 判断点击的选项，是不是当前选中的选项
            const isEditting = this.edittingId === `${column.key}_${index}`
            return (
              <div>
                {
                  isEditting
                    ? <Input on-input={this.handleInput} value={row[column.key]} style="width: 50px"/>
                    : <span>{row[column.key]}</span>
                }
                <Button on-click={this.handleClick.bind(this, { row, index, column })} type="warning">
                  {isEditting ? '保存' : '编辑'}
                </Button>
              </div>
            )
          }
          return item // map返回组合成 一个新的数组
        } else { // cloumns里面包含render函数
          return item
        }
      })
      this.insideColumns = insideColumns // 将添加render后的新数组赋给 insideColumns
    }
  }
}
</script>
