import { Form } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import AccountLogin from './AccountLogin'
import MessageCodeLogin from './MessageCodeLogin'
import Register from './Register'
import QRLogin from './QRLogin'
import Forget from './Forget'
export default function Login(props: any) {
  const [loginMethod, setLoginMethod] = useState('aclogin')
  const [moudle, setMoudle] = useState('account')
  const [active, setActive] = useState(true)
  const [code, setCode] = useState()
  const [mccheck, setMc] = useState(false)
  const [appdownloan, setAppDownloan] = useState(false)
  const [qractive, setQRactive] = useState(true)

  const onChange = (e: CheckboxChangeEvent) => {
    setMc(e.target.checked)
    console.log(`checked = ${e.target.checked}`)
  }

  const onChangeAPP = (e: CheckboxChangeEvent) => {
    setQRactive(e.target.checked)
    console.log(`checked = ${e.target.checked}`)
  }
  const onFinishMc = (values: any) => {
    console.log('Success:', values)
  }
  const onFinishAc = (values: any) => {
    console.log('Success', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const [form] = Form.useForm() //将form实例挂载到form上 ,antd自带封装hook
  console.log(form)
  return (
    <div>
      <div className={styles.loginPage}>
        <a
          href="https://www.xiaolanben.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.loginRightButton}
        >
          进入官网
        </a>
        <div className={styles.loginSide}>
          <div className={styles.loginLogo}>
            {
              <img
                src="https://51nbimg.u51.com/40a71ba838654e89a8965eccd562a325.png"
                alt="logo"
                className={styles.loginLogoTitle}
              />
            }
            {
              <img
                src="https://51nbimg.u51.com/d7825f88795a45668b509bf4ae350397.png"
                alt="backimage"
                className={styles.loginLogoImages}
              />
            }
          </div>
        </div>
        <div className={styles.loginMain}>
          <div className={styles.loginInner}>
            <div className={styles.loginTitle}>欢迎使用小蓝本</div>
            <div className={styles.loginModule}>
              {moudle === 'account' && (
                <div className={styles.loginWrapperPC}>
                  <img
                    src="https://51nbimg.u51.com/3105cbc3ca7247aba9622c2ddb477f2c.png"
                    alt="二维码登录"
                    className={styles.loginQR}
                    onClick={() => setMoudle('qrcode')}
                  />
                  <div className={styles.loginTabSelect}>
                    <div
                      className={
                        active
                          ? styles.selectItem + ' ' + styles.active
                          : styles.selectItem
                      }
                      onClick={() => {
                        setActive(true)
                      }}
                    >
                      账密登录
                    </div>
                    <div
                      className={
                        active
                          ? styles.selectItem
                          : styles.selectItem + ' ' + styles.active
                      }
                      onClick={() => {
                        setActive(false)
                      }}
                    >
                      验证码登录
                    </div>
                  </div>
                  {active ? (
                    <AccountLogin setM={setMoudle} history={props.history} />
                  ) : (
                    <MessageCodeLogin />
                  )}
                  <div className={styles.accountRegister}>
                    <div
                      className={styles.registerItem}
                      onClick={() => {
                        setMoudle('register')
                      }}
                    >
                      注册账号
                    </div>
                  </div>
                </div>
              )}
              {moudle === 'qrcode' && <QRLogin setQ={setMoudle} />}
              {moudle === 'register' && <Register setM={setMoudle} />}
              {moudle === 'forget' && <Forget setM={setMoudle} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
