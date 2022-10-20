import {
  SearchOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import logo from '@/assets/images/logo@2x.png'
import view1 from '@/assets/images/触达.svg'
import plogo from '@/assets/images/icon.png'
import phome from '@/assets/images/首页.svg'
import pclub from '@/assets/images/线索中心.svg'
import ptalk from '@/assets/images/拓客.svg'
import pcrm from '@/assets/images/智能CRM.svg'
import pstatement from '@/assets/images/报表中心.svg'
import { MenuProps, message } from 'antd'
import { Breadcrumb, Layout, Menu, Input, Badge } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import React, { useState } from 'react'
import styles from './index.module.scss'
const { Header, Content, Sider } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1685288_njw37wgpnml.js',
})
const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})
const LayoutHome = () => {
  const [collapsed, setCollapsed] = useState(false)
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
            <div>
              <IconFont type="icon-biaodanyemian" />
              使用指南
            </div>
            <div>
              <IconFont type="icon-icon_function_daorudaochu" />
              导入导出
            </div>
            <div>
              <Badge count={1} size={'small'}>
                <IconFont type="icon-lingdang" />
              </Badge>
              消息
            </div>
            <div>
              <span>
                <img src={plogo} alt="头像" className={styles.pLogo} />
              </span>
              金圆
            </div>
          </div>
        </div>
      </Header>
      <Layout style={{ marginTop: '64px' }} className={styles.main}>
        <Sider
          className={styles.sider}
          collapsed={collapsed}
          style={{
            height: '650',
            position: 'fixed',
            left: 0,
            bottom: 0,
          }}
        >
          <button
            onClick={() => {
              setCollapsed(!collapsed)
            }}
          >
            <IconFont type="icon-a-zuosuojin3x" />
          </button>
        </Sider>
        <Content className={styles.content}>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
