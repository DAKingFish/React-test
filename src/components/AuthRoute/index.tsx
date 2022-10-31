// hasToken 判断是否有token
// import { isAuth } from '@/utils'
// import { Route, Redirect } from 'react-router-dom'
// export const AuthRoute = ({ children }: any) => {
//   if (isAuth()) {
//     return <Route>
//       {children}
//     </Route>
//   } else {
//     return <Redirect
//       to={{
//         pathname: '/login',
//         state: {
//           // 传入当前游览页面的路径
//           from: window.location.pathname,
//         },
//       }}
//     />
//   }
// }

// hasToken 判断是否有token
import { isAuth } from '@/utils'
import { Route, Redirect } from 'react-router-dom'

export const AuthRoute = ({ children, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth()) {
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


// const App = ({age}) => {
//   return 12
// }

// <App age={12} />

// App({age: 12})