import React, {useEffect} from 'react'
import './Styles/App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import api from '../Api'

import Routes from './routes'
function App() {
  const test = async () => {
    const response = await api.post('auth/registerUser', {
      Email: 'abc@abc.com',
      Password: '12345678',
    })
    console.log(response)
  }
  useEffect(() => {
    test()
  }, [])
  return (
    <div className="App">
      <NavBar />
      <div id="main">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
