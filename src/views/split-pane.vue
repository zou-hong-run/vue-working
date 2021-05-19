<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <template v-slot:left><div>leftcontainer</div></template>
      <template v-slot:right><div>rightcontainer</div></template>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from '_c/split-pane'
export default {
  name: 'split_pane',
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.8
    }
  },
  methods: {
    // handleInput (value) {
    //   this.offset = value
    // }
  },
}
</script>
<style lang="less">
.split-pane-con{
  width: 400px;
  height: 200px;
  background: rgb(26, 24, 22);
}
</style>
