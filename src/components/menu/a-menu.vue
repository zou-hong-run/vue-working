<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "AMenu"
}
</script>
<style lang="less">
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
.a-menu {
  padding: 15px 0;
  background: skyblue;
}
</style>
