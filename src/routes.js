import {Route, Switch} from 'react-router-dom'
import {SignUp, LogIn, Home, Error} from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  )
}
export default Router
