import { Layout, Input } from 'antd'
import React, { MouseEvent } from 'react'
import './index.scss'
// 导入 antd 组件库的样式
import 'antd/dist/antd.css'
import backimg from '../../assets/1.png'
import logo from '../../assets/2.png'
const { Header, Sider, Content } = Layout

const Login: React.FC = () => {
  function changeLogin(e: MouseEvent<HTMLDivElement>) {
    e.currentTarget.classList.add('current')
    if (e.currentTarget.nextSibling) {
      e.currentTarget.nextElementSibling?.classList.remove('current')
    } else {
      e.currentTarget.previousElementSibling?.classList.remove('current')
    }
  }
  return (
    <div>
      <Layout className="login">
        <Sider className="login_left" width="560">
          <div className="l_left_top">
            <img src={logo} alt="logo" />
          </div>
          <div className="l_left_middle">
            <img src={backimg} alt="backimg" />
          </div>
        </Sider>
        <Layout className="login_right">
          <Header className="go_main">
            <a
              href="https://www.xiaolanben.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              进入官网
            </a>
          </Header>
          <Content className="login_body">
            <div className="login_tab">欢迎使用小蓝本</div>
            <div className="login_select"></div>
            <div className="login_body1">
              <div className="body1_top">
                <div className="b1_top1 current" onClick={changeLogin}>
                  账号登录
                </div>
                <div className="b1_top2" onClick={changeLogin}>
                  验证码登录
                </div>
                <div className="top_form1">
                  <Input
                    placeholder="请输入手机号"
                    className="ac_number"
                    bordered={false}
                  />
                  <Input.Password
                    placeholder="请输入密码"
                    className="ac_password"
                    bordered={false}
                  />
                  <div className="forget_pass">忘记密码</div>
                  <input type="checkbox" className="isOk" />
                  <div className="isText">自动登录</div>
                </div>
              </div>
            </div>
            <div className="login_body2"></div>
            <div className="login_body3"></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default Login
