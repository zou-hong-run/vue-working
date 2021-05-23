<template>
  <div>
    <h1>store</h1>
    <a-input v-model="inputValue" />
    <hr>
    {{ inputValue }}
    <hr>
    {{ appName }}
    <hr>
    {{ userName }}
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState} = createNamespacedHelpers('user')
// import { mapState } from 'vuex'
export default {
  name: 'Store',
  components: {
    AInput
  },
  data () {
    return {
      // inputValue:''
    }
  },
  computed: {
    // ...mapState({
    //   appName:state=>state.appName,
    //   userName:state=>state.user.userName
    // })
    // ...mapState('user',{
    //   appName:state=>state.appName,
    //   userName:state=>state.user.userName
    // })
    // ...mapState([
    //   'userName',
    // ])
    appName () {
      return this.$store.getters.appName
    },
    userName () {
      return this.$store.getters.userName
    },
    inputValue: {
      get () {
        return this.$store.getters.appName
      },
      set (value) {
        this.$store.dispatch('SET_APP_NAME', value)
      }
    }
  },
  mounted () {
    this.$store.commit('SET_APP_NAME', 'mutaionsname')
    // this.$store.commit({
    //   type:'SET_APP_NAME',
    //   appName:"mutaionsname"
    // })
    this.$store.dispatch('updateAppName')
  }
}
</script>
