// hasToken 判断是否有token
import { isAuth } from '@/utils'
import { Route, Redirect, RouteProps } from 'react-router-dom'

export const AuthRoute = ({ children, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth()) {
          // children 与vue中插槽类似是Route包裹的内容
          return children
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                // 传入当前游览页面的路径
                from: props.location.pathname,
              },
            }}
          />
        )
      }}
    />
  )
}
