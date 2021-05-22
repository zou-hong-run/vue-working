<template>
  <div class="a-menu-item">
    <li>
      <slot></slot>
    </li>
  </div>
</template>
<script>
export default {
  name: 'AMenuItem'
}
</script>
<style lang="less">
  .a-menu-item {
    background: yellow;
  }
</style>
