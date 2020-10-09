import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from '@material-ui/core'
import SignUp from './SignUp'
import LogIn from './LogIn'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1
  }
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{
              color: '#C0C0C0',
              fontStyle: 'italic',
              fontWeight: 'bolder'
            }}
            variant="h3"
            className={classes.title}
          >
            KeepUp
          </Typography>
          <SignUp />
          <LogIn />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
