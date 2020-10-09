import React from 'react'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Formik } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 0'
  },
  input: {
    color: 'white'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#282c34',
    border: '2px solid #000',
    padding: '20px',
    outline: 'none'
  },
  button: {
    margin: '10px',
    fontWeight: 'bolder'
  },
  text: {
    fontSize: 'medium',
    fontStyle: 'italic',
    fontWeight: 'bolder'
  }
}))

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`
}

const LogIn = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  const body = (
    <div id="sign-up" style={modalStyle} className={classes.paper}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password is too short -- must be at least 8 characters')
            .required('Required')
        })}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form
            className="sign-in-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="standard-basic"
              className={classes.root}
              InputLabelProps={{ className: classes.input }}
              InputProps={{ className: classes.input }}
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email}
            <TextField
              id="standard-basic"
              className={classes.root}
              InputLabelProps={{ className: classes.input }}
              InputProps={{ className: classes.input }}
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Log In
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        <Typography className={classes.text}>Log In</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default LogIn