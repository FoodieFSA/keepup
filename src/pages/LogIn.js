import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'

export default () => {
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

  // TODO after user submit the form, run this function..
  const finalCommand = () => {
    console.log('hello')
  }

  return (
    <div className="form-page">
      <div className="form-title">Log in to your account</div>
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
