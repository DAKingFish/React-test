import {
  SearchOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import logo from '@/assets/images/logo@2x.png'
import plogo from '@/assets/images/icon.png'
import { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, Input, Badge } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { useMenus } from '@/utils/menus'
import styles from './index.module.scss'
const { Header, Content, Sider } = Layout
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1685288_3z4k917vg9t.js',
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
  const [collapsed, setCollapsed] = useState(true)
  const [pitem, setPitem] = useState<React.ReactNode>() //设置主导航栏
  const [eitem, setEitem] = useState('') //设置次导航栏
  const [sitem, setSitem] = useState('') //设置具体导航栏
  const { menus, getMenus } = useMenus()
  const [color, setColor] = useState(true)
  const items = menus.map((item: any) => {
    return {
      ...item,
      key: item.label,
      icon: <IconFont type={item.icon} />,
    }
  })
  useEffect(() => {
    getMenus() //获取服务器中menus数据
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.header} style={{ zIndex: 1, width: '100%' }}>
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
      <Layout className={styles.main}>
        <Sider className={styles.sider} collapsed={collapsed}>
          <Menu
            className={styles.siderMenu}
            mode="inline"
            inlineCollapsed={true}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={(e: any) => {
              setPitem(e.key)
            }}
          />
          <IconFont
            style={
              color
                ? { fontSize: '20px' }
                : { fontSize: '20px', color: '#4687F4' }
            }
            type="icon-a-zuosuojin3x"
            className={styles.showMenus}
            onClick={() => {
              setCollapsed(!collapsed)
            }}
            onMouseOver={() => {
              setColor(false)
            }}
            onMouseOut={() => {
              setColor(true)
            }}
          />
        </Sider>
        <Content className={styles.content}>
          <Sider width={200} className="site-layout-background">
            <div className={styles.contentTitle}>
              {pitem === '' ? '首页' : pitem}
            </div>
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
              <Breadcrumb.Item>{pitem === '' ? '首页' : pitem}</Breadcrumb.Item>
              <Breadcrumb.Item>
                {eitem === '' ? '首页功能选项' : eitem}
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {sitem === '' ? '首页的具体功能' : sitem}
              </Breadcrumb.Item>
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
