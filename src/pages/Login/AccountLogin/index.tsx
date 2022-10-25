import styles from './index.module.scss'
import {
  Button,
  Checkbox,
  Form,
  Input,
  ConfigProvider,
  Tooltip,
  message,
} from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useEffect, useState } from 'react'
import { login } from '@/api/use'
import eye from '@/assets/images/eye.png'
import eyeclose from '@/assets/images/eye-close.png'

console.log(styles)
export default function AccountLogin(props: any) {
  const [loginerr, setLoginErr] = useState(false) //是否同意协议的tooltip的判断
  const [value, setValue] = useState(false) //是否同意协议
  const [form] = Form.useForm()
  console.log(form)
  /*  const onFinishAc = async (values: any) => {
    const res = await login(values)
    if(values.)
    try {
      localStorage.setItem('user_token', res.data.token) //自建服务器要给token
      props.history.push('/h')
      message.success('登录成功')
    } catch (err) {
      message.error('登录失败')
    }
  } */
  const onFinishAc = async (values: any) => {
    const res: any = await login(values)
    console.log('res->', res.data[0])
    if (
      res.data[0].phonenumber === Number(values.acphonenumber) &&
      res.data[0].password === Number(values.password)
    ) {
      message.success('登录成功')
      try {
        localStorage.setItem('user_token', res.data[0].token) //自建服务器要给token
        //props.history.push('/h')  我的app页面没有加history属性
        window.location.href = '/h'
      } catch (error) {
        message.error('成功未执行')
      }
    } else {
      message.error('登录失败')
    }
  }
  const onChangeAc = (e: CheckboxChangeEvent) => {
    setValue(e.target.checked)
    setLoginErr(false) //setLoginErr的设置 直接validator来进行重新赋值
    console.log(`checked = ${e.target.checked}`) //这是自己看看的,实际开发时要取消
  }

  return (
    <Form className={styles.selectContext} onFinish={onFinishAc} form={form}>
      <Form.Item
        style={{ marginBottom: '32px' }}
        validateTrigger={'onBlur'}
        name="acphonenumber"
        rules={[
          {
            required: true,
            message: '手机号不能为空',
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式不正确',
          },
        ]}
      >
        <Input
          className={styles.scPhoneNumber}
          bordered={true}
          maxLength={11}
          placeholder={'请输入手机号码'}
        />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: '32px' }}
        validateTrigger={'onBlur'}
        name="password"
        rules={[
          {
            required: true,
            message: '密码不能为空',
          },
        ]}
      >
        <Input.Password
          className={styles.scPassword}
          bordered={true}
          placeholder={'请输入密码'}
          iconRender={(visible) =>
            visible ? (
              <img src={eye} alt="天亮了请挣眼" />
            ) : (
              <img src={eyeclose} alt="天黑请闭眼" />
            )
          }
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: '16px' }} className={styles.scForget}>
        <span
          className={styles.forgetPassword}
          onClick={() => {
            props.setM('forget')
          }}
        >
          忘记密码
        </span>
      </Form.Item>

      <Form.Item style={{ marginBottom: '9px' }}>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.scLoginButton}
          >
            登录
          </Button>
        </ConfigProvider>
      </Form.Item>
      <Form.Item
        name="accheck"
        className={styles.scAgreements}
        style={{ marginBottom: '0px' }}
        rules={[
          {
            validator: () => {
              return value
                ? Promise.resolve(setLoginErr(false))
                : Promise.reject(value ? setLoginErr(false) : setLoginErr(true)) //这里要加判断 check的状态是否保存
            },
          },
        ]}
      >
        <Tooltip
          placement="top"
          arrowPointAtCenter
          title={'请先阅读并同意注册协议和隐私政策等'}
          overlayClassName={styles.tooltip}
          open={loginerr}
        >
          <Checkbox
            className={styles.accountCheck}
            checked={value}
            onChange={onChangeAc} //进行是否同意切换
          ></Checkbox>
        </Tooltip>
        <div className={styles.agreemrntsItem}>
          <span>我已阅读并同意</span>
          <a
            href="https://web.xiaolanben.com/luban-project-ssr-2634/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            《用户注册协议》
          </a>
          <a
            href="https://web.xiaolanben.com/luban-project-ssr-3196/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            《小蓝本网络服务条款》
          </a>
          <a
            href="https://web.xiaolanben.com/luban-project-ssr-1899/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            《隐私政策》
          </a>
        </div>
      </Form.Item>
    </Form>
  )
}
