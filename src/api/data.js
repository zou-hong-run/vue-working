import axios from '@/lib/axios'
export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    method: 'get'
  })
}
