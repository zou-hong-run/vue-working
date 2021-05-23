<template>
  <div class="side-menu-wrapper">
    <slot />
    <Menu
      v-show="!collapsed"
      width="auto"
      theme="dark"
      @on-select="handleSelect"
    >
      <template v-for="(item) in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        />
        <MenuItem
          v-else
          :key="`menu_${item.name}`"
          :name="item.name"
        >
          <Icon :type="item.icon" />
          {{ item.title }}
        </MenuItem>
      </template>
    </Menu>
    <div
      v-show="collapsed"
      class="drop-wrapper"
    >
      <template v-for="item in list">
        <re-dropdown
          v-if="item.children"
          :key="`drop_${item.name}`"
          :show-title="false"
          icon-color="#fff"
          :parent="item"
          @on-select="handleSelect"
        />
        <Tooltip
          v-else
          :key="`drop_${item.name}`"
          transfer
          :content="item.title"
          placement="right"
        >
          <span
            class="drop-menu-span"
            @click="handleClick(item.name)"
          >
            <Icon
              :type="item.icon"
              color="#fff"
              size="20"
            />
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from '_c/side-menu/re-submenu.vue'
import ReDropdown from '_c/side-menu/re-dropdown.vue'
export default {
  name: 'SideMenu',
  components: { ReSubmenu, ReDropdown },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      console.log(name)
    },
    handleClick (name) {
      console.log(name)
    }
  }
}
</script>
<style lang="less">
  .side-menu-wrapper {
    width: 100%;
    .ivu-tooltip, .drop-menu-span {
      width: 100%;
      display: block;
      text-align: center;
      padding: 5px 0;
    }
    .drop-wrapper > .ivu-dropdown {
      display: block;
      margin: 0 auto;
      padding: 5px 0;
    }
  }
</style>
