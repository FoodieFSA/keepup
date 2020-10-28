import * as Yup from 'yup'
import BaseForm from '../Components/BaseForm'
import AppTextField from '../Components/AppTextField'
import { FormControl, Select, InputLabel } from '@material-ui/core'

function UserProfileForm () {
  /*
  firstname
  lastname
  gender
  dob
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
    dob: Yup.date().required().label('dob'),
    height: Yup.number().required().label('Height'),
    weight: Yup.number().required().label('Weight')
  })

  // TODO after user submit the form, run this function
  const finalCommand = () => {
    console.log('hello')
    // TODO: update user info
  }

  // TODO: decide if we should have password, address, exp level field
  return (
    <div id="user-profile-form" className="form-page">
      <BaseForm
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          dob: '',
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
        buttonText="Update Profile"
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
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
              >
                Gender
              </InputLabel>
              <Select
                native
                label="Gender"
                name="gender"
                defaultValue={''}
                // TODO: Need to change color from grey to white
              >
                <option aria-label="None" value="" />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </Select>
            </FormControl>

            <AppTextField
              // not sure if we are doing age groups
              {...formProps}
              label="DOB"
              type="date"
              name="dob"
            />
            <AppTextField
              {...formProps}
              // height ranges? or options
              label="Height (cm)"
              type="height"
              name="height"
              InputLabelProps={{
                shrink: true
              }}
            />
            <AppTextField
              {...formProps}
              // weight ranges or options?
              label="Weight (lbs)"
              type="weight"
              name="weight"
              InputLabelProps={{
                shrink: true
              }}
            />
          </>
        )}
      </BaseForm>
    </div>
  )
}

export default UserProfileForm
