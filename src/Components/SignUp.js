import React, { useState } from 'react'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Formik } from 'formik'
import * as Yup from 'yup'
import BaseForm from './BaseForm'

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

export default () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleModalOpen = () => setOpen(true)
  const handleModalClose = () => setOpen(false)

  const [state, setState] = useState({
    firstName: '', lastName: '', email: '', password: '', dataMode: 'insert'
  })
  const ValidationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required(),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required(),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password is too short -- must be at least 8 characters').required()
  })
  const finalCommand = () => {
    console.log('hello')
  }

  const body = (
    <div id='sign-up' className={classes.paper}>
      <BaseForm
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={{
          // TODO adding the api call for submitting data
        // initializeDocument: initializeActivity,
        // insertDocument: insertActivity,
        // retrieveDocument: retrieveActivity,
        // updateDocument: updateActivity
        }}
        finalCommand={finalCommand}
        buttonText='Sign up'
      >
        <>
          <TextField
            id='standard-basic'
            className={classes.root}
            InputLabelProps={{ className: classes.input }}
            InputProps={{ className: classes.input }}
            label='First Name'
            type='text'
            name='firstName'
            value={state.firstName}
          // onChange={handleChange}
          />
          {/* {errors.firstName} */}
          <TextField
            id='standard-basic'
            className={classes.root}
            InputLabelProps={{ className: classes.input }}
            InputProps={{ className: classes.input }}
            label='Last Name'
            type='text'
            name='lastName'
            value={state.lastName}
          // onChange={handleChange}
          />
          {/* {errors.lastName} */}
          <TextField
            id='standard-basic'
            className={classes.root}
            InputLabelProps={{ className: classes.input }}
            InputProps={{ className: classes.input }}
            label='Email'
            type='email'
            name='email'
            value={state.email}
          // onChange={handleChange}
          />
          {/* {errors.email} */}
          <TextField
            id='standard-basic'
            className={classes.root}
            InputLabelProps={{ className: classes.input }}
            InputProps={{ className: classes.input }}
            label='Password'
            type='password'
            name='password'
            value={state.password}
          // onChange={handleChange}
          />
          {/* {errors.password} */}
        </>
      </BaseForm>
    </div>
  )
  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleModalOpen}>
        <Typography className={classes.text}>Sign Up</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  )
}
