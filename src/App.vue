<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'About'}">About</router-link>
    </div>
    <h3>命名视图</h3>
    <transition-group name="router">
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
  </div>
</template>
<style lang="less">
// 进入
// .router-enter{
//   opacity: 0;
// }
// // 开始
// .router-enter-active{
//   transition: opacity 1s ease;
// }
// // 结束
// .router-enter-to{
//   opacity: 1;
// }

// // 离开
// .router-leave{
//   opacity: 1;
// }
// // 开始
// .router-leave-active{
//   transition: opacity 1s ease;
// }
// // 结束
// .router-leave-to{
//   opacity: 0;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
