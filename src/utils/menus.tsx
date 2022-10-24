import axios from 'axios'
import { useState } from 'react'

export function useMenus() {
  //接受数据
  //数据类型怎么接收
  //ps:axios 返回的数据自动带层data包裹
  //直接将data数据结构出来,直接setMenus
  const [menus, setMenus] = useState([])
  const getMenus = () => {
    axios
      .get('http://1.15.184.206:8360/server/online/jinyuan/menus')
      .then(function (response) {
        setMenus(response.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { menus, getMenus } //向外提供对象,猴子写返回数组报错
}
