<template>
  <ul>
    <li v-for="(item, index) in list" :key="`list_item${item.name+index}`">
      <!-- <span v-if="!render">{{item.name}}</span>
      <render-dom v-else :render-func="render" :name="item.name"></render-dom> -->
      <slot :number="item.name"></slot>
    </li>
  </ul>
</template>
<script>
import RenderDom from '_c/render-dom.js'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: ()=>[]
    },
    render: {
      type: Function,
      default: ()=>{}
    }
  }
}
</script>
