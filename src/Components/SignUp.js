import React, { useState } from 'react'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as Yup from 'yup'
import BaseForm from './BaseForm'
import AppTextField from './AppTextField'
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

  const ValidationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required().label('First Name'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required().label('Last Name'),
    email: Yup.string().email('Invalid email address').required().label('Email'),
    password: Yup.string().min(8, 'Password is too short -- must be at least 8 characters').required().label('password')
  })
  // TODO after user submit the form, run this function
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
        {formProps =>
          <>
            <AppTextField {...formProps} label='First Name' type='text' name='firstName' />
            <AppTextField {...formProps} label='Last Name' type='text' name='lastName' />
            <AppTextField {...formProps} label='Email' type='email' name='email' />
            <AppTextField {...formProps} label='Password' type='password' name='password' />
          </>}
      </BaseForm>
    </div>
  )

  return (
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
        {formProps =>
          <>
            <AppTextField {...formProps} label='First Name' type='text' name='firstName' />
            <AppTextField {...formProps} label='Last Name' type='text' name='lastName' />
            <AppTextField {...formProps} label='Email' type='email' name='email' />
            <AppTextField {...formProps} label='Password' type='password' name='password' />
          </>}
      </BaseForm>
    </div>
  )
}
