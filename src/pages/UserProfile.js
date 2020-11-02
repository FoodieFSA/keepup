import { useState, useEffect } from 'react'
import produce from 'immer'

const UserProfile = () => {
  const [state, setState] = useState({ counter: 0, ticks: 10 })
  // TODO: back-end call to retrieve user data from the db (axios?)

  useEffect(() => {
    // TODO: fetch self user data and make it the state
  }, [])

  const handleOnClick = () => {
    console.log('hit handle click')
    setState(
      produce((draftState) => {
        // will only change specific fields listed, produce keeps copy of the old object
        draftState.counter = state.counter + 1
      })
    )
    // setState({counter: state.counter + 1})
  }

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

      <button onClick={handleOnClick}>Button</button>
      <p>Counter: {state.counter}</p>
      <p>Ticks: {state.ticks}</p>
    </div>
  )
}

export default UserProfile
