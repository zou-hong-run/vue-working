<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hr>
    {{home}}
    <hr>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到about</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserInfo } from '@/api/user'
export default {
  name: 'Home',
  props: {
    home: {
      type: String
    }
  },
  components: {
  },
  // 组件内导航
  // beforeRouteEnter (to, from, next) {
  //   // ...
  //   next()
  // },
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('你确定退出？')
  //   if (leave)next()
  // },
  mounted () {
    getUserInfo('12').then(res => {
      console.log(res)
    })
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.go(-1)
      else if (type === 'push') this.$router.push('/about')
    }
  }
}
</script>
