import React from 'react'
import { TextField, Button, Modal, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Formik } from 'formik'
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
  // const [open, setOpen] = React.useState(false);
  // const handleModalOpen = () => setOpen(true);
  // const handleModalClose = () => setOpen(false);

  const ValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required(),
    password: Yup.string()
      .min(8, 'Password is too short -- must be at least 8 characters')
      .required()
  })

  // After user logs in, run this action....
  const finalCommand = () => {
    console.log('back to home page')
  }

  const body = (
    <div id='sign-up' className={classes.paper}>
      <BaseForm
        initialValues={{ email: '', password: '' }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={
          {
            // TODO: add the API call for submitting log-in credentials
          }
        }
        finalCommand={finalCommand}
        buttonText='Log In'
      >
        {(formProps) => (
          <>
            <AppTextField
              {...formProps}
              label='Email'
              type='email'
              name='email'
            />
            <AppTextField
              {...formProps}
              label='Password'
              type='password'
              name='password'
            />
          </>
        )}
      </BaseForm>
    </div>
  )

  return (
    <div id='sign-up' className={classes.paper}>
      <BaseForm
        initialValues={{ email: '', password: '' }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={
          {
            // TODO: add the API call for submitting log-in credentials
          }
        }
        finalCommand={finalCommand}
        buttonText='Log In'
      >
        {(formProps) => (
          <>
            <AppTextField
              {...formProps}
              label='Email'
              type='email'
              name='email'
            />
            <AppTextField
              {...formProps}
              label='Password'
              type='password'
              name='password'
            />
          </>
        )}
      </BaseForm>
    </div>
  )
}
