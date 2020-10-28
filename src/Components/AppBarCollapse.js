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

const AppBarCollapse = ({ classes, isLoggedIn }) => {
  // TODO use the isLoggedIn to display different Link
  console.log('user is logging: ', isLoggedIn)
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <Link to="/login">
          <MenuItem>Login</MenuItem>
        </Link>
        <Link to="/signup">
          <MenuItem>Signup</MenuItem>
        </Link>
        <Link to="/workout-log">
          <Button color="inherit">
            <AddCircleOutlineIcon />
            Add Workout Log
          </Button>
        </Link>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        {/* TODO using react-router to click on the button for the form */}
        <Link to="/workout-log">
          <Button color="inherit">
            <AddCircleOutlineIcon />
            Add Workout Log
          </Button>
        </Link>
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/signup">
          <Button color="inherit">Signup</Button>
        </Link>
      </div>
    </div>
  )
}
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}
export default connect(mapState, null)(withStyles(styles)(AppBarCollapse))
