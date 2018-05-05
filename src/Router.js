import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='login' component={LoginForm} title='Please Login' initial />
        <Scene key='employeeList' component={EmployeeList} title='Employees' />
      </Scene>
    </Router>
  )
}

export default RouterComponent

// every scene has to have a key
// initial tells router what to render first (without that, just renders first one)
