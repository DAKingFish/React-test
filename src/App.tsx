import './App.scss'
//导入路由组件
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Demo from './pages/Demo'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Homework from './pages/Homework'
import NotFound from './pages/NotFound'
import { history } from './utils'
import { AuthRoute } from '@/components/AuthRoute'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          {/* 重定向跳转 */}
          <Redirect exact from="/" to="/h" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/test">
            <Homework />
          </Route>
          <AuthRoute path="/h">
            <Layout />
          </AuthRoute>
          {/* 增加一个404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
