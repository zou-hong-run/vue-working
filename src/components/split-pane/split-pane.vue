<template>
  <div ref="outer" class="split-pane-wrapper">
    <div :style="{ width:leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px`}" class="pane pane-left">1
      <!--<button @click="handleClick">-</button>-->
      <slot name="left"></slot>
    </div>
    <div @mousedown="hanleMousedown" :style="{ left:triggerLeft, width: triggerWidth+'px'}" class="pane pane-trigger-con"></div>
    <div :style="{ left:leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }" class="pane pane-right">3
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  data() {
    return {
      // value: 0.3,// 修改为value
      canMove: false,
      initOffset: 0,// 拖动条初始偏移量
    }
  },
  props: {
    // 初始偏移量
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.8
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc( ${this.value * 100}% - ${this.triggerWidth / 2}px )`
    }
  },
  methods: {
    handleClick () {
      this.$emit('update:value', this.value - 0.2);
    },
    hanleMousedown (event) {
      const node = event.srcElement || event.target;
      document.addEventListener('mousemove',this.hanleMousemove)
      document.addEventListener('mouseup',this.hanleMouseup)
      this.canMove = true
      this.initOffset = event.pageX - node.getBoundingClientRect().left
    },
    hanleMousemove (event) {
      if(!this.canMove){return}
      // 偏移的像素
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth/2 - outerRect.left) / outerRect.width
      if(offsetPercent< this.min){ offsetPercent = this.min }
      if(offsetPercent> this.max){ offsetPercent = this.max }
      // this.$emit('input', offsetPercent);
      this.$emit('update:value', offsetPercent);
    },
    hanleMouseup () {
      this.canMove = false
    }
  },
};
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    height: 100%;
    top: 0;
    position: absolute;
    &-left {
      // width: 30%;
      background: yellowgreen;
    }
    &-right {
      right: 0;
      bottom: 0;
      // left: 30%;
      background: palegoldenrod;
    }
    &-trigger-con {
      // left: 0;
      // width: 8px;
      background: red;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
