import React, { useEffect } from 'react'
import './Styles/App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import api from '../Api'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  const test = async () => {
    const response = await api.post('auth/registerUser', {
      Email: 'abc@abc.com',
      Password: '12345678'
    })
    console.log(response)
  }
  useEffect(() => {
    test()
  }, [])
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='main'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/login'>
              <LogIn />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
