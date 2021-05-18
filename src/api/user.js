import axios from '@/lib/axios'

export const getUserInfo = (userId) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}
