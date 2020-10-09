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
            variant="h5"
            className={classes.title}
          >
            KeepUp
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
