import { Route, Switch } from 'react-router-dom'
import { SignUp, LogIn, Home } from './pages'

function Router () {
  return (
    <Switch>
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={LogIn} />
      <Route path='/' exact component={Home} />
    </Switch>
  )
}
export default Router
