import React from 'react'
import styles from './index.module.scss'
import notPage from '@/assets/images/404.png'
const NotFound: React.FC = () => {
  return (
    <div className={styles.page}>
      <img src={notPage} alt="404" />
      <p>请求出错,请联系管理员</p>
    </div>
  )
}
export default NotFound
