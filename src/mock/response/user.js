import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-6': 'redrun',
    'age|4-18': 0,
    'obj|2-4': {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    },
    'arr|2-4': [1, 2, 3],
    'arr|2': [1, 2, 3], // 重复数组
    func: () => {
      return 'this is a function'
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    email1: Mock.mock('@email'),
    date: Random.date('yyyy-MM-dd'),
    dateTime: Random.datetime('yyyy-MM-dd : hh:mm'),
    image: Random.image(), // size bgc color format string
    img_base: Random.dataImage(),
    fruit: Random.fruit()
  }
  return Mock.mock(template)
}
