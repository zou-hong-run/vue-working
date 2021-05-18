<template>
  <div>
    <count-to :class="className" ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <template v-slot:left>
        <span :class="className1">总金额：</span>
      </template>
      <template  v-slot:right>
        <span :class="className1"> $</span>
      </template>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="update">更新值</button>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100,
      className: 'bgc',
      className1: 'bgcr'

    }
  },
  methods: {
    getNumber () {
      // 父组件调用子组件的方法
      console.log(this.$refs.countTo.getCount())
    },
    update () {
      this.endVal += Math.random()*100
    },
    handleEnd (endVal) {
      console.log(endVal)
    }
  },
}
</script>
<style lang="less">
.bgc{
  background: yellow;
}
.bgcr{
  background: skyblue;
}
</style>
