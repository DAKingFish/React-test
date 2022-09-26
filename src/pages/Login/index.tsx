const Login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <div className="l_left_top">
          <img src="" alt="logo" />
        </div>
        <div className="l_left_middle">
          <img src="" alt="back-img" />
        </div>
      </div>
      <div className="login_right">
        <div className="go_main">
          <a
            href="https://www.xiaolanben.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            进入官网
          </a>
        </div>
        <div className="login_body">
          <div className="login_tab">欢迎使用小蓝本</div>
          <div className="login_select"></div>
          <div className="login_body1">
            <div className="body1_top">
              <div className="b1_top1">账号登录</div>
              <div className="b1_top2">验证码登录</div>
            </div>
          </div>
          <div className="login_body2"></div>
          <div className="login_body3"></div>
        </div>
      </div>
    </div>
  )
}
export default Login
