// 递归组件 最重要一点，有一个name
<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item,i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{item.title}}</a-menu-item>
      <re-submenu v-else :parent="item" :key="`menu_item_${index}_${i}`"></re-submenu>
    </template>
  </a-submenu>
</template>
<script>
import menu from '_c/menu'
const { AMenuItem, ASubmenu } = menu
export default {
  name: 'ReSubmenu',
  components: {
    AMenuItem,
    ASubmenu
  },
  props: {
    parent: {
      type: Object,
      default: ()=>({})
    },
    index: Number
  },
  mounted() {
    // console.log(this.parent)
  },
}
</script>
