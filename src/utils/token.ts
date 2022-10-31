const user_token = 'user_token'
const setToken = (token: any) => {
  localStorage.setItem(user_token, token)
}
const removeToken = () => {
  localStorage.removeItem(user_token)
}
const getToken = (): any => {
  return localStorage.getItem(user_token)
}
// 4 判断是否登录，假设，本地缓存中有 token 就是登录了
// !! 表示转化为布尔值，因为，我们要的是 是否登录，就是一个布尔值类型，所以，需要将其转化为 布尔值类型
const isAuth = () => {
  return !!getToken()
}
export { setToken, removeToken, getToken, isAuth }
