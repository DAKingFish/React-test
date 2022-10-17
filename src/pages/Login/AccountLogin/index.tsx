import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, ConfigProvider, Tooltip } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useEffect, useState } from 'react'
import eye from '@/assets/eye.png'
import eyeclose from '@/assets/eye-close.png'

console.log(styles)
export default function AccountLogin(props: any) {
  const [loginerr, setLoginErr] = useState(false) //是否同意协议的tooltip的判断
  const [value, setValue] = useState(false) //是否同意协议
  const [form] = Form.useForm()
  console.log(form)
  const onFinishAc = (values: any) => {
    console.log('Success', values)
  }
  const onChangeAc = (e: CheckboxChangeEvent) => {
    setValue(e.target.checked)
    setLoginErr(false)
    console.log(`checked = ${e.target.checked}`)
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
