/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import { Button, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ButtonAppBarCollapse from './ButtonAppBarCollapse'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { connect } from 'react-redux'
import { logout } from '../store'

const styles = (theme) => ({
  root: {
    position: 'absolute',
    right: '15px'
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    margin: '10px',
    marginLeft: '15px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent'
  }
})

const AppBarCollapse = ({ classes, isLoggedIn, logout }) => {
  console.log('user is ddddddd: ', isLoggedIn)
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        {
          isLoggedIn
            ? <div>
              <Link to="/user-profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link to="/workout-log">
                <Button color="inherit">
                  <AddCircleOutlineIcon />
                  Add Workout Log
                </Button>
              </Link>
              <MenuItem onClick={logout} >Log Out</MenuItem>
            </div> : <div>
              <Link to="/login">
                <MenuItem>Login</MenuItem>
              </Link>
              <Link to="/signup">
                <MenuItem>Signup</MenuItem>
              </Link>
              <MenuItem onClick={logout} >Log Out</MenuItem>
            </div>
        }
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        {isLoggedIn ? <div>
          <Link to="/workout-log">
            <Button color="inherit">
              <AddCircleOutlineIcon />
                Add Workout Log
            </Button>
          </Link>
          <Link to="/user-profile">
            <Button color="inherit">Profile</Button>
          </Link>
          <Button color="inherit" style={{ color: 'red' }} onClick={logout}>Log Out</Button>
        </div> : <div>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit">Signup</Button>
          </Link>
          <Button color="inherit" style={{ color: 'red' }} onClick={logout}>Log Out</Button>
        </div>
        }
      </div>
    </div>
  )
}
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(mapState, mapDispatch)(withStyles(styles)(AppBarCollapse))
