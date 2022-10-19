import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import logo from '@/assets/images/logo@2x.png'
import view1 from '@/assets/images/触达.svg'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, Input } from 'antd'
import React, { useState } from 'react'
import styles from './index.module.scss'
const { Header, Content, Sider } = Layout

const LayoutHome = () => {
  const [collapsed, setCollapsed] = useState(false)
  type MenuItem = Required<MenuProps>['items'][number]
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
      getItem('Team 1', '6'),
      getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined />),
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        className={styles.header}
        style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <img src={logo} alt="logo" />
        <div className={styles.headerRight}>
          <Input
            className={styles.headerInput}
            placeholder="请输入公司/人名/产品等"
            prefix={
              <SearchOutlined style={{ fontSize: '16px', color: '#c1c1c1' }} />
            }
          />
          <br />
          <div className={styles.headerMenu}>
            <div>{view1}使用指南</div>
          </div>
        </div>
      </Header>
      <Layout style={{ marginTop: '64px' }}>
        <Sider
          width={100}
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
