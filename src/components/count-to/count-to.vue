<template>
  <div>
    <slot name="left" />
    <span
      :id="eleId"
      ref="number"
      :class="countClass"
    />
    <slot name="right">
      ￥
    </slot>
  </div>
</template>
<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 1
    },
    /**
     * @description 最终值
     * @requires true
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 延迟(毫秒)
     */
    delay: {
      type: Number,
      default: 1
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用渐变效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      // 改变数值后动画结束
      this.emitEndEvent()
    }
  },
  mounted () {
    // 当页面组件都挂载完毕的时候调用
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  },
  methods: {
    getCount () {
      // 父组件调用子组件的方法
      return this.$refs.number.innerText
    },
    // 改变数值后动画结束
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', Number(this.getCount()))
        })
      }, this.duration * 1000 + 5)
    }
  }
}
</script>
<style lang="less">
@import './count-to.less';
</style>
