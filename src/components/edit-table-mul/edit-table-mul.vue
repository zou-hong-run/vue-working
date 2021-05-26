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
      insideData: [], // 克隆value后的值
      insideColumns: [] // this.columns的值
    }
  },
  watch: {
    columns: function () {
      this.handleColumns()
    },
    value: function () {
      this.handleColumns()
    }
  },
  mounted () {
    this.handleColumns()
  },
  methods: {
    // 点击的时候
    handleClick ({ row, index, column }) {
      // 获取，单行，点击元素索引age email 第一次可能啥也没有
      const keyIndex = this.insideData[index].edittingKeyArr ? this.insideData[index].edittingKeyArr.indexOf(column.key) : -1
      // 存储当前列的数据
      const rowObj = this.insideData[index]
      if (keyIndex > -1) { // 获取已经点击元素的索引 age eamil的处于数组的哪个位置 点击保存
        rowObj.edittingKeyArr.splice(keyIndex, 1) // 删除当前
        this.insideData.splice(index, 1, rowObj)// 保存更新后的数据
        this.$emit('input', this.insideData) // 将数据发送给父级v-model
        // 告诉父组件已经更新了
        this.$emit('on-edit', { row, index, column, newValue: this.insideData[index] })
      } else { // 以前没有点击修改按钮
        // 给当前列对象添加一个属性 原来存在就合并，没有就添加 age email
        rowObj.edittingKeyArr = (rowObj.edittingKeyArr) ? [...rowObj.edittingKeyArr, column.key] : [column.key]
        // 替换掉源数据，显示最新状态数据(触发render函数渲染视图)
        this.insideData.splice(index, 1, rowObj)
      }
    },
    // 改变input框里面的值
    handleInput ({ row, index, column }, newValue) { // 传递过来的值
      // 改变选中项value后的值，第几条里面的第几列
      this.insideData[index][column.key] = newValue // 改变值后handleClick告诉父元素子元素已经更新了
    },
    handleColumns () {
      // 克隆传递过来的值
      this.insideData = clonedeep(this.value)
      // 处理传递过来的列的数据
      const insideColumns = this.columns.map(item => { // item => key,title 调用次数和数组的长度有关
        // 列数据没有传递render,可编辑，的情况
        if (!item.render && item.editable) {
          // 给符合上述条件的列添加render函数
          item.render = (h, { row, index, column }) => { // 行数据，索引，列数据
          // 给每行数据(对象)添加一个属性（这个属性是对象）（用户没有点击前，为undefined）
            const keyArr = this.insideData[index] ? this.insideData[index].edittingKeyArr : []
            console.log(keyArr)
            return (
              <div>
                {
                  keyArr && keyArr.indexOf(column.key) > -1
                    ? <Input on-input={this.handleInput.bind(this, { row, index, column })} value={row[column.key]} style="width: 50px"/>
                    : <span>{row[column.key]}</span>
                }
                <Button on-click={this.handleClick.bind(this, { row, index, column })} type="warning">
                  {/* 判读keyArr里面是否有数据，没有数据按钮文字就是编辑 */}
                  {keyArr && keyArr.indexOf(column.key) > -1 ? '保存' : '编辑'}
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
