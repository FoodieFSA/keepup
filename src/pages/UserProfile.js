import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'

function UserProfile () {
  /*
  firstname
  lastname
  gender
  age
  height
  weight

  */
  const ValidationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required()
      .label('First Name'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required()
      .label('Last Name'),
    gender: Yup.mixed()
      .oneOf(['Male', 'Female', 'Prefer not to say'])
      .required()
      .label('Gender'),
    age: Yup.number().required().label('Age'),
    height: Yup.number().required().label('Height'),
    weight: Yup.number().required().label('Weight')
  })

  // TODO after user submit the form, run this function
  const finalCommand = () => {
    console.log('hello')
  }

  // TODO: decide if we should have password, address, exp level field
  return (
    <div id="user-profile-page" className="form-page">
      <BaseForm
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          age: '',
          height: '',
          weight: ''
        }}
        validationSchema={ValidationSchema}
        fastValidation
        externalApi={
          {
            // TODO: add the API call for submitting log-in credentials
          }
        }
        finalCommand={finalCommand}
        buttonText="Submit"
      >
        {(formProps) => (
          <>
            <AppTextField
              {...formProps}
              label="First Name"
              type="text"
              name="firstName"
            />
            <AppTextField
              {...formProps}
              label="Last Name"
              type="text"
              name="lastName"
            />
            <AppTextField
              {...formProps}
              label="Gender"
              type="gender"
              name="gender"
            />
            <AppTextField {...formProps} label="Age" type="age" name="age" />
            <AppTextField
              {...formProps}
              label="Height"
              type="height"
              name="height"
            />
            <AppTextField
              {...formProps}
              label="Weight"
              type="weight"
              name="weight"
            />
          </>
        )}
      </BaseForm>
    </div>
  )
}

export default UserProfile
