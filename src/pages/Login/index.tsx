import { Layout, Input } from 'antd'
import React, { MouseEvent, useState } from 'react'
import './index.scss'
// 导入 antd 组件库的样式
import 'antd/dist/antd.css'
import backimg from '../../assets/1.png'
import logo from '../../assets/2.png'
const { Header, Sider, Content } = Layout

const Login: React.FC = () => {
  // function changeLogin(e: MouseEvent<HTMLDivElement>) {
  //   e.currentTarget.classList.add('current')
  //   console.log(e.currentTarget.nextSibling)
  //   if (e.currentTarget.nextSibling) {
  //     e.currentTarget.nextElementSibling?.classList.remove('current')
  //   } else {
  //     e.currentTarget.previousElementSibling?.classList.remove('current')
  //   }
  // }
  const [active, setActive] = useState(true)
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
          {}
          <Content className="login_body">
            <div className="login_tab">欢迎使用小蓝本</div>
            <div className="login_select"></div>
            <div className="login_body1">
              <div className="body1_top">
                {/* <div className="b1_top1 current" onClick={changeLogin}>
                  账号登录
                </div>
                <div className="b1_top2" onClick={changeLogin}>
                  验证码登录
                </div> */}
                <div
                  className={active ? 'b1_top1 current' : 'b1_top1'}
                  onClick={() => {
                    setActive(true)
                  }}
                >
                  账号登录
                </div>
                <div
                  // className={'b1_top2 ' + !active ? ' current' : ''}
                  className={active ? 'b1_top2 current' : 'b1_top2'}
                  onClick={() => {
                    setActive(false)
                  }}
                >
                  验证码登录
                </div>
              </div>
              <div className="top_form1 disappear">
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
                <div className="ac_loginBut">登录</div>
                <input type="checkbox" className="ac_sure" />
                <div className="sure_text">
                  我已阅读并同意
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《用户注册协议》
                  </a>
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《隐私协议》
                  </a>
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《小蓝本网络服务协议》
                  </a>
                </div>
              </div>
              <div className="top_form2">
                <Input
                  placeholder="请输入手机号"
                  className="cd_number"
                  bordered={false}
                />
                <Input
                  placeholder="请输入验证码"
                  className="cd_code"
                  bordered={false}
                />
                <div className="send_code">获取验证码</div>
                <div className="cd_loginBut">登录</div>
                <input type="checkbox" className="cd_sure" />
                <div className="sure_text">
                  我已阅读并同意 rel="noopener noreferrer"
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《用户注册协议》
                  </a>
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《隐私协议》
                  </a>
                  <a
                    href="https://www.xiaolanben.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《小蓝本网络服务协议》
                  </a>
                </div>
              </div>
              <div className="b1_registerBtn">注册账号</div>
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
