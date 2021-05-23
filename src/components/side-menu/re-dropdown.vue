<template>
  <Dropdown
    placement="right-start"
    @on-click="handleClick"
  >
    <span
      class="drop-menu-span"
      :style="titleStyle"
    >
      <Icon
        :type="parent.icon"
        :color="iconColor"
        size="20"
      />
      <span v-if="showTitle">{{ parent.title }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown
          v-if="item.children"
          :key="`drop_${item.name}`"
          :parent="item"
        />
        <DropdownItem
          v-else
          :key="`drop_${item.name}`"
          :name="item.name"
        >
          <Icon
            :type="item.icon"
            color="#ccc"
            size="20"
          />
          {{ item.title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: 'ReDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: 'yellow'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left' : 'center',
        paddingLeft: this.showTitle ? '16px' : ''
      }
    }
  },
  mounted () {
    console.log(this.parent)
  },
  methods: {
    handleClick (name) {
      if (!this.showTitle) this.$emit('on-select', name)
    }
  }
}
</script>
