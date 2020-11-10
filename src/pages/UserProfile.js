import { connect } from 'react-redux'
import { isClear } from '../Components'
import { Button } from '@material-ui/core'

function UserProfile ({ user, history }) {
  const handleOnClick = () => {
    history.push('/user-profile-update')
  }

  // TODO covert back when it is using real data
  // const userData = user.userData

  // TODO  using loading https://github.com/danilowoz/react-content-loader
  const userData = {
    first_name: 'abc',
    last_name: 'sdsd',
    email: '',
    user_dob: '',
    user_height: 150,
    user_weight: 140,
    user_gender: 'Prefer not to say'
  }

  console.log(userData)
  if (isClear(userData)) {
    return <p>loading</p>
  }
  return (
    <div id="user-profile-page">
      <h1> My Profile Page </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <img
          src="https://cdn.patch.com/assets/layout/contribute/user-default.png"
          style={{
            height: '400px',
            width: '400px',
            borderRadius: '50%'
          }}
        />
        <div style={{ paddingTop: '40px' }}>
          <div className="user-profile-info">
            <h3>
              <span>Name: </span>
              {userData.first_name + ' ' + userData.last_name}
            </h3>
          </div>
          <div className="user-profile-info">
            <h3>
              <span>Email: </span>
              {userData.email || 'Email Unavailable'}
            </h3>
          </div>
          <div className="user-profile-info">
            <h3>
              <span>DOB: </span>
              {userData.user_dob || 'Dob Unavailable'}
            </h3>
          </div>
          <div className="user-profile-info">
            <h3>
              <span>Height: </span>
              {userData.user_height || 'Height Unavailable'}
            </h3>
          </div>
          <div className="user-profile-info">
            <h3>
              <span>Weight: </span>
              {userData.user_weight || 'Weight Unavailable'}
            </h3>
          </div>
          <div className="user-profile-info">
            <h3>
              <span>Gender: </span>
              {userData.user_gender || 'Height Unavailable'}
            </h3>
          </div>
          <Button
            style={{ marginLeft: '25px' }}
            variant="contained"
            color="primary"
            onClick={handleOnClick}
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, null)(UserProfile)
