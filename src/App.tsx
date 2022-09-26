import React from 'react'
import './App.scss'
//导入路由组件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
