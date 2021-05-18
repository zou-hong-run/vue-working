export default store => {
  console.log('插件初始化了')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log('mutaion变化', mutation)
    // localStorage.state = JSON.stringify(state)
  })
}
