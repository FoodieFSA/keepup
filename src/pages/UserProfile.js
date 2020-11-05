import { connect } from 'react-redux'

function UserProfile ({ user, history }) {
  const handleOnClick = () => {
    history.push('/user-profile-update')
  }

  if (Object.keys(user).length === 0) {
    history.push('/error')
  }

  const userData = user.userData

  return (
    <div>
      {Object.keys(user).length ? (
        <div id="user-profile-page">
          <div>
            <h1> My Profile Page </h1>
          </div>
          <div>
            <img
              src="https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png"
              style={{ height: '200px', width: '200px' }}
            />
          </div>
          <div className="user-profile-info">
            <div>{userData.first_name || 'First Name Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.last_name || 'Last Name Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.email || 'Email Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.user_dob || 'Dob Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.user_height || 'Height Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.user_weight || 'Weight Unavailable'}</div>
          </div>
          <div className="user-profile-info">
            <div>{userData.user_gender || 'Height Unavailable'}</div>
          </div>
          <button onClick={() => handleOnClick()}>Update Profile</button>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps, null)(UserProfile)
