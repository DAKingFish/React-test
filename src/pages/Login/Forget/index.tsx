import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, ConfigProvider, Tooltip } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useTimer } from '@/utils/useTimer'
export default function Forget(props: any) {
  const [moudle, setMoudle] = useState('')
  const [second, setSecond] = useState(61)
  const [mccheck, setMc] = useState(false)
  const [code, setCode] = useState()
  const onFinishRg = (values: any) => {
    console.log('Success:', values)
  }
  const [form] = Form.useForm()
  const { time, run } = useTimer()
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
    <div className={styles.register}>
      <img
        src="https://51nbimg.u51.com/a9652bb92bfa43deb4f846a0016a0dc5.png"
        alt="退出"
        onClick={() => {
          props.setM('account')
        }}
      />
      <div className={styles.rgTitle}>重置密码</div>
      <Form className={styles.selectContext} onFinish={onFinishRg}>
        <Form.Item
          style={{ marginBottom: '32px' }}
          name="fgphonenumber"
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
            className={styles.fgPhoneNumber}
            bordered={true}
            maxLength={11}
            placeholder={'请输入手机号码'}
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: '32px' }}
          name="fgimagecode"
          validateTrigger={'onBlur'}
          rules={[
            {
              required: true,
              message: '图形验证码不能为空',
            },
          ]}
        >
          <Input
            className={styles.fgImgCode}
            bordered={true}
            maxLength={4}
            placeholder={'请输入图形验证码'}
            suffix={
              <img
                alt="图形验证码"
                src="data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAmAIIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0eiiqnm3JQyLsYCQrsCHON23rn056VyH0dy3RVRbiWUzLE8Lsqqy7eRkk8Hn29qck7LtaV0MbKSGClcY5IOSe38jQFyzUTzBWZVwSo3MScBR7moDNdYYgISIy+zYcg4+UZzyf8+lNBHkTOZfmMqknyWGD8uBt684H50CuL9vJmjhRYnkcnG2XKgAZ5OM/pViGRpPMDoFZG2nDZHQH0HrVdZJJJITIOkxCnYUyNh7H3zQZminnXIQFw25kLDG1RnjoPcmgLl2iokkYSeVJjft3BlGAw78dsZH51LQMKKKKQwooooAKKKKACiiigAqn/wAuh95yD7gy81cqp5M+3y9sezzd+7ec437umP60xMt1U/ctIyPjY0nyKe7Dkke2f1z61YmEhiYRECQjgk8CoUtsxFXwrYCrtOdgHTBPvz/+qgTH23COD/rAx3+5/wD1Y/CoX/5b/wDXxH/7JUiLcfaFkdIlG3a+1yc+nGPr+dNeGYyOAI9jyo+SxyMbe2P9n1oDoST/AOttv+uh/wDQGpIiPNuST0ccnsNq0s6SMYmjCko+7DHGeCPQ+tQNbzO5eRY23cFQ7LgemQPmHsR3NADo9xjsQfv4BbPXGw5/UirdRpFiQyudzkYHoo9B/nn8qkoGgooopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="
              />
            }
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: '32px' }}
          validateTrigger={'onBlur'}
          name="fgmessagecode"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('验证码不能为空')),
            },
            {},
          ]}
        >
          <Input
            className={styles.fgCode}
            bordered={true}
            maxLength={4}
            placeholder={'请输入短信验证码'}
            value={code}
            suffix={
              <div
                className={time > 0 ? styles.fgNCRequest : styles.fgCRequest}
                onClick={() => {
                  run(60)
                }}
              >
                {time > 0 ? time + 's' : '获取验证码'}
              </div>
            }
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: '32px' }}
          validateTrigger={'onBlur'}
          name="rgpassword"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('密码不能为空')),
            },
          ]}
        >
          <Input.Password
            className={styles.fgPassword}
            bordered={true}
            placeholder={'请输入密码'}
            iconRender={(visible) =>
              visible ? (
                <img
                  src="https://51nbimg.u51.com/ffcd70d872124d5380211501c9ad101f.svg?x-oss-process=image/format,png"
                  alt="天亮了请挣眼"
                />
              ) : (
                <img
                  src="https://51nbimg.u51.com/637c1e08b9e645c58d2b027b13fee9dd.svg?x-oss-process=image/format,png"
                  alt="天黑请闭眼"
                />
              )
            }
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: '9px' }}>
          <ConfigProvider autoInsertSpaceInButton={false}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.fgLoginButton}
            >
              重置
            </Button>
          </ConfigProvider>
        </Form.Item>
        {/* <Form.Item className={styles.rgAgreements}>
          <Checkbox
            className={styles.messageCheck}
            onChange={onChange}
          ></Checkbox>
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
        </Form.Item> */}
      </Form>
    </div>
  )
}
