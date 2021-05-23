//  函数式组件只做数据接收，不做任何响应
//  没有状态
export default {
  functional: true,
  props: {
    name: String,
    renderFunc: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.name)
  }
}
