import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import SignUp from './SignUp'
import LogIn from './LogIn'
import AppBarCollapse from './AppBarCollapse'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1,
    color: '#C0C0C0',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  appBarBackground: {
    backgroundColor: '#4169E1'
  }
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarBackground} color='primary' position='static'>
        <Toolbar>
          <Typography variant='h3' className={classes.title}>
            KeepUp
          </Typography>
          <AppBarCollapse />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
