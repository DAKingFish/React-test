import styles from './index.module.scss'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Button, Checkbox, Form, Input, ConfigProvider, Tooltip } from 'antd'
import { useEffect, useState } from 'react'
export default function QRLogin(props: any) {
  const [loginMethod, setLoginMethod] = useState('aclogin')
  const [moudle, setMoudle] = useState('account')
  const [active, setActive] = useState(true)
  const [code, setCode] = useState()
  const [mccheck, setMc] = useState(false)
  const [appdownloan, setAppDownloan] = useState(false)
  const [qractive, setQRactive] = useState(true)
  const onChangeAPP = (e: CheckboxChangeEvent) => {
    setQRactive(e.target.checked)
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div className={styles.loginWrapperQR}>
      <img
        src="https://51nbimg.u51.com/c7f5ace8dd4f46d1a5d43cde7962d656.png"
        alt="二维码登录"
        className={styles.loginPC}
        onClick={() => props.setQ('account')}
      />
      <div className={styles.qrTitle}>
        打开{' '}
        <span
          onMouseEnter={() => setAppDownloan(true)}
          onMouseOut={() => setAppDownloan(false)}
        >
          小蓝本APP
        </span>{' '}
        扫描登录
        <br />
        更快、更安全
      </div>
      <div className={styles.appVersion}>
        请使用<span>6.18.0</span>以上版本
      </div>
      <div className={appdownloan ? styles.appDownload : styles.appNP}>
        <div className={styles.appScanTitle}>扫描二维码下载小蓝本APP</div>
        <img
          src="https://51nbimg.u51.com/cc77e73ccb71497f9f701c5ec05a272b.png"
          alt="二维码下载"
        />
      </div>
      <div className={styles.appQR}>
        <img
          src="data:image/png;base64,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"
          alt="二维码"
        />
      </div>
      <div className={styles.appAgreements}>
        <div className={styles.agreementsButtton}>
          <Checkbox
            className={styles.appCheck}
            onChange={onChangeAPP}
            checked={qractive}
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
      {!qractive ? (
        <div className={styles.appPrompt}>
          <span>
            请先阅读并同意注册协议和
            <br />
            隐私协议政策等
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
