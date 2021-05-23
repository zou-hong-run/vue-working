<template>
  <ul class="a-submenu">
    <div
      class="a-submenu-title"
      @click="handleClick"
    >
      <slot name="title" />
      <span
        class="shrink-icon"
        :style="{ transform: `rotateY(${showChild ? 0 : 60 }deg)`}"
      >^</span>
    </div>
    <div
      v-show="showChild"
      class="a-submenu-child-box"
    >
      <slot />
    </div>
  </ul>
</template>
<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>
<style lang="less">
.a-submenu {
  &-title {
    background-color:rgb(67, 134, 201);
    color: #fff;
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
}
</style>
