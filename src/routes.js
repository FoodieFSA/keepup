import { withRouter, Route, Switch } from 'react-router-dom'
import { SignUp, LogIn, Home } from './pages'

function Router (props) {
  console.log(props.location)
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={LogIn} />
    </Switch>
  )
}
export default withRouter(Router)
