<template>
  <Table
    :columns="insideColumns"
    :data="data"
  />
</template>
<script>
export default {
  name: 'EditTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      edittingId: '',
      insideColumns: [],
      edittingContent: ''
    }
  },
  mounted () {
    // console.log(this.columns,this.data)
    const insideColumns = this.columns.map(item => {
      // item.render is undefined
      if (!item.render && item.editable) {
        // columns里面的每一项都添加item.item
        item.render = (h, { row, index, column }) => {
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
        return item
      } else {
        return item
      }
    })
    this.insideColumns = insideColumns
  },
  methods: {
    handleClick ({ row, index, column }) {
      this.edittingId = `${column.key}_${index}`
    },
    handleInput (newValue) {
      this.edittingContent = newValue
    }
  }
}
</script>
