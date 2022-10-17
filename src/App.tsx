import React from 'react'
import './App.scss'
//导入路由组件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Demo from './pages/Demo'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Homework from './pages/Homework'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={Demo} />
          <Route path="/test" component={Homework} />
          {/* 增加一个404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
