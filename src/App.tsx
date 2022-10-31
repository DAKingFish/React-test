import React from 'react'
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
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={Demo} />
          <Route path="/test" component={Homework} />
          <Route path="/h" component={Layout} />
          <AuthRoute path="/h" component={Layout}></AuthRoute>

          {/* 增加一个404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
