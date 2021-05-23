<template>
  <div class="menu-box">
    <!--<a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-menu-item>333</a-menu-item>
      <a-submenu>
        <template v-slot:title>title1</template>
        <a-menu-item>333-1</a-menu-item>
        <a-submenu>
          <template v-slot:title>title2</template>
          <a-menu-item>333-2-1</a-menu-item>
          <a-menu-item>333-2-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu>
    -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item
          v-if="!item.children"
          :key="`menu_item_${index}`"
        >
          {{ item.title }}
        </a-menu-item>
        <re-submenu
          v-else
          :key="`menu_item_${index}`"
          :parent="item"
          :index="index"
        />
      </template>
    </a-menu>
  </div>
</template>
<script>
import menu from '_c/menu'
import ReSubmenu from '_c/menu/re-submenu.vue'
const { AMenu, AMenuItem } = menu

export default {
  name: 'MenuPage',
  components: {
    AMenu,
    AMenuItem,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '111'
        },
        {
          title: '333',
          children: [
            {
              title: '333-1'
            },
            {
              title: '333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2'
                },
                {
                  title: '3333-2-3'
                },
                {
                  title: '3333-2-4'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less">
  .menu-box {
    margin: 0 auto;
    width: 300px;
    height: 400px;
    background: skyblue;
  }
</style>
