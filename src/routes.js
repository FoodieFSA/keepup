import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Home from './Components/Home'

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
    </Switch>
  )
}
export default Router
