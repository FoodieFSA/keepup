import { withRouter, Route, Switch } from 'react-router-dom'
import { SignUp, LogIn, Home } from './pages'
import { connect } from 'react-redux'
function Router ({ isLoggedIn, location }) {
  console.log(isLoggedIn, location)
  // TODO  use the IsLoggedIn to restrict user for different route
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={LogIn} />
    </Switch>
  )
}
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}
export default withRouter(connect(mapState, null)(Router))
