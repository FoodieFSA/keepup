import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'
import { auth } from '../store'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Api from '../Api'

const Login = ({ loginUser, error, history }) => {
  const ValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required()
      .label('Email'),
    password: Yup.string()
      .min(8, 'Password is too short -- must be at least 8 characters')
      .required()
      .label('Password')
  })
  useEffect(() => {
    // Api.get('test').then(res => {
    //   console.log(res)
    // })
    // Api.post('auth/refresh_token', null, {
    //   withCredentials: true
    // }).then(res => {
    //   console.log(res.data.accessToken)
    // })
    Api.get('user/getUser').then(res => {
      console.log(res)
    })
  })
  const finalCommand = () => history.push('/')

  return (
    <div className="form-page">
      <div className="form-title">Log in to your account</div>
      <span style={{ color: 'red' }}>{error}</span>
      <BaseForm
        initialValues={{ email: '', password: '' }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={{
          insertDocument: loginUser
        }}
        finalCommand={finalCommand}
        buttonText="Log In"
      >
        {(formProps) => (
          <>
            <AppTextField
              {...formProps}
              label="Email"
              type="email"
              name="email"
            />
            <AppTextField
              {...formProps}
              label="Password"
              type="password"
              name="password"
            />
          </>
        )}
      </BaseForm>
    </div>
  )
}
const mapState = (state) => ({ error: state.user.error })
const mapDispatch = (dispatch) => {
  return {
    loginUser: (payload) => dispatch(auth(payload, 'loginUser'))
  }
}

export default connect(mapState, mapDispatch)(Login)
