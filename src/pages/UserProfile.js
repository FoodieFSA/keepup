// import {useState} from 'react'

function UserProfile () {
  // let [myProfile, setMyProfile] = useState({})
  // let [firstName, setFirstName] = useState('')
  // let [lastName, setLastName] = useState('')
  // let [age, setAge] = useState(0)
  // let [height, setHeight] = useState('')
  // let [weight, setWeight] = useState('')

  // TODO: back-end call to retrieve user data from the db (axios?)

  return (
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
        <div>First Name</div>
      </div>
      <div className="user-profile-info">
        <div>Last Name</div>
      </div>
      <div className="user-profile-info">
        <div>Email</div>
      </div>
      <div className="user-profile-info">
        <div>Age / DOB</div>
      </div>
      <div className="user-profile-info">
        <div>Height</div>
      </div>
      <div className="user-profile-info">
        <div>Weight</div>
      </div>
    </div>
  )
}

export default UserProfile
