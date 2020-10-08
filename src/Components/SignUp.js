import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import { TextField, Button } from '@material-ui/core'

function SignUp () {
  return (
    <div className="signup">
      <NavBar />
      <form>
        <div>
          <TextField
            required
            id="standard-required"
            hintText="Peter"
            floatingLabelText="First Name"
          />
          <br />
          <TextField hintText="Pan" floatingLabelText="Last Name" />
          <br />
          <TextField
            hintText="PeterPan@neverland.com"
            floatingLabelText="Email"
          />
          <br />
          <Button style={styles.button} variant="contained" color="primary">
            Continue
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

const styles = {
  button: {
    margin: 15
  }
}

export default SignUp
