import { Route, Switch } from 'react-router-dom'
import { SignUp, LogIn, Home, Error } from './pages'

function Router () {
  return (
    <Switch>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/" exact component={Home} />
      <Route component={Error} />
    </Switch>
  )
}
export default Router
