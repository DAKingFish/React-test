import request from '@/utils/request'

/**
 * 登录请求，用于用户登录,案例与本地不相同,要怎么修改?
 * 本地服务有多个登录逻辑,
 * 手机号,密码,图像验证码,短信验证码,重置密码
 * 接口文档的重要性,有了文档就能根据文档来创造数据
 * 参数类型要改:对应的单词可以自定义,关键服务端怎么写,还是自建服务端?
 * @param {string} acphonenumber 手机号
 * @param {string} password 密码
 * @returns Promise
 */
export const login = (data: any) => {
  console.log('打印->', data)
  return request({
    method: 'post',
    url: '/login', //路径不知道要怎么改
    data,
  })
}
