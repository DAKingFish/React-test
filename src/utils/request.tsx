import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://1.15.184.206:8360/server/online/jinyuan',
  timeout: 5000,
})

// 请求拦截器,不知道怎么使用
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器,不知道怎么使用
instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
