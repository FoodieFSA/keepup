import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'
import { FormControl, Select, InputLabel } from '@material-ui/core'

function UserProfileForm () {
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
    <div id="user-profile-form" className="form-page">
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
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
              <Select
                native
                inputProps={{
                  name: 'gender',
                  id: 'gender-native-simple'
                }}
                // TODO: Need to change color from grey to black
              >
                <option aria-label="None" value="" />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </Select>
            </FormControl>

            <AppTextField
              {...formProps}
              // not sure if we are doing age groups
              label="Age"
              type="age"
              name="age"
            />
            <AppTextField
              {...formProps}
              // height ranges? or options
              label="Height"
              type="height"
              name="height"
            />
            <AppTextField
              {...formProps}
              // weight ranges or options?
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

export default UserProfileForm
