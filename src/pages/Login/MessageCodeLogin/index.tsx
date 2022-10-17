import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, ConfigProvider, Tooltip } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
export default function MessageCodeLogin() {
  const [second, setSecond] = useState(61)
  const [mccheck, setMc] = useState(false)
  const [code, setCode] = useState()
  const onFinishMc = (values: any) => {
    console.log('Success:', values)
  }
  const [form] = Form.useForm()
  const [rqcode, setRqcode] = useState(false) //控制短信验证文案
  useEffect(() => {
    if (second < 61 && second >= 0) {
      setTimeout(() => {
        setSecond(second - 1)
      }, 1000)
    }
  }, [second])
  const secondDown = async () => {
    await form.validateFields(['mcphonenumber'])
    setRqcode(true)
    setSecond(60)
  }
  const onChange = (e: CheckboxChangeEvent) => {
    setMc(e.target.checked)
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <Form className={styles.selectContext} onFinish={onFinishMc} form={form}>
      <Form.Item
        style={{ marginBottom: '32px' }}
        name="mcphonenumber"
        validateTrigger={'onBlur'}
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
        style={{ marginBottom: '80px' }}
        validateTrigger={'onBlur'}
        name="messagecode"
        extra={
          rqcode ? (
            <span>
              <CheckCircleOutlined />
            </span>
          ) : (
            ''
          )
        }
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('验证码不能为空')),
          },
        ]}
      >
        <Input
          className={styles.scCode}
          bordered={true}
          maxLength={4}
          placeholder={'请输入短信验证码'}
          value={code}
          suffix={
            <div className={styles.mCRequest}>
              {second > 60 || second < 0 ? (
                <span className={styles.messageCodeBtn} onClick={secondDown}>
                  获取验证码
                </span>
              ) : (
                <span className={styles.messageCodeBtn}>{second}s</span>
              )}
            </div>
          }
        />
      </Form.Item>

      {/* <Form.Item
        style={{ marginBottom: '16px' }}
        validateTrigger={'onBlur'}
        className={styles.scMessage}
      >
        {second > 60 || second < 0 ? (
          <span className={styles.messageCodeBtn} onClick={secondDown}>
            获取验证码
          </span>
        ) : (
          <span className={styles.messageCodeBtn}>{second}s</span>
        )}
      </Form.Item> */}

      <Form.Item
        style={{ marginBottom: '9px' }}
        rules={[
          {
            validator: (mccheck) =>
              mccheck
                ? Promise.resolve()
                : Promise.reject(new Error('验证码不能为空')),
          },
        ]}
      >
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
      <div className={styles.scAgreements}>
        <div className={styles.agreementsButtton}>
          <Checkbox
            className={styles.messageCheck}
            onChange={onChange}
          ></Checkbox>
        </div>
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
      </div>
    </Form>
  )
}
