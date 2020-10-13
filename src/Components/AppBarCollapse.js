/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from 'react'
import { Button, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ButtonAppBarCollapse from './ButtonAppBarCollapse'
import { Link } from 'react-router-dom'

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

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>Login</MenuItem>
      <MenuItem>Signup</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id='appbar-collapse'>
      {/* TODO using react-router to click on the button for the form */}
      <Link to='/login'>
        <Button color='inherit'>Login</Button>
      </Link>
      <Link to='/signup'>
        <Button color='inherit'>Signup</Button>
      </Link>
    </div>
  </div>
)

export default withStyles(styles)(AppBarCollapse)
