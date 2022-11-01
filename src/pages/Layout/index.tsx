import {
  SearchOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons'
import logo from '@/assets/images/logo@2x.png'
import plogo from '@/assets/images/icon.png'
import { createFromIconfontCN } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, Input, Badge } from 'antd'
import React from 'react'
import styles from './index.module.scss'
const { Header, Content, Footer, Sider } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1685288_4r63gpm9m95.js',
})
const LayoutHome = () => {
  return (
    <Layout className={styles.main}>
      <Header className={styles.nav}>
        <img src={logo} alt="logo" style={{ width: '232px' }} />
        <Input
          placeholder="请输入公司/人名/产品等"
          prefix={
            <SearchOutlined
              style={{ fontSize: '16px', color: '#c1c1c1', outline: 'none' }}
            />
          }
          style={{ width: '400px' }}
        />
        <div className={styles.navRight}>
          <div>
            <IconFont type="icon-wendang" />
            使用指南
          </div>
          <div>
            <IconFont type="icon-icon_function_daorudaochu" />
            导入导出
          </div>
          <div>
            <IconFont type="icon-guanli" />
            管理中心
          </div>
          <div>
            <Badge count={1} size={'small'}>
              <IconFont type="icon-lingdang" />
            </Badge>
            消息
          </div>
          <div>
            <span className={styles.user}>
              <img src={plogo} alt="用户头像" className={styles.pLogo} />
              金圆
            </span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider></Sider>
      </Layout>
    </Layout>
  )
}
export default LayoutHome
