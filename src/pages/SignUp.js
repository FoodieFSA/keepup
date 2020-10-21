import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'
import { auth } from '../store/user'
import { connect } from 'react-redux'

const SignUp = ({ registerUser, history }) => {
  const ValidationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required()
      .label('First Name'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required()
      .label('Last Name'),
    email: Yup.string()
      .email('Invalid email address')
      .required()
      .label('Email'),
    password: Yup.string()
      .min(8, 'Password is too short -- must be at least 8 characters')
      .required()
      .label('password')
  })

  // TODO after user submit the form, run this function
  const finalCommand = (id) => {
    console.log(id, '...............')
    console.log(history)
    history.push('/')
  }

  return (
    <div className='form-page'>
      <div className='form-title'>Create an account</div>
      <BaseForm
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={
          {
            // TODO adding the api call for submitting data
            // initializeDocument: initializeActivity,
            insertDocument: registerUser
            // retrieveDocument: retrieveActivity,
            // updateDocument: updateActivity
          }
        }
        finalCommand={finalCommand}
        buttonText='Sign Up'
      >
        {(formProps) => (
          <>
            <AppTextField
              {...formProps}
              label='First Name'
              type='text'
              name='firstName'
            />
            <AppTextField
              {...formProps}
              label='Last Name'
              type='text'
              name='lastName'
            />
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
const mapDispatch = (dispatch) => {
  return {
    registerUser: (payload) => dispatch(auth(payload, 'registerUser'))
  }
}

export default connect(null, mapDispatch)(SignUp)
