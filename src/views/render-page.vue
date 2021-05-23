<template>
  <div>
    <list
      :list="list"
      :render="renderFunc"
    >
      <template v-slot="number">
        <i style="color:pink">{{ number.number }}</i>
      </template>
    </list>
  </div>
</template>
<script>
import list from '_c/list'
export default {
  components: {
    list
  },
  data () {
    return {
      list: [
        { name: 'lison' },
        { name: 'redrun' }
      ],
      value: ''
    }
  },
  methods: {
    renderFunc (h, name) {
      return (
        <i on-click={this.showtime} style={{ color: 'pink' }}>{name}</i>
      )
      // return h('i', {
      //   style: {
      //     color: 'pink'
      //   }
      // }, name)
    },
    showtime (e) {
      console.log(e, 'aaaa')
    }
  }
}
</script>
