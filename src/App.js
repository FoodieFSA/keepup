import React, { useEffect } from 'react'
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import api from '../Api'
import axios from 'axios'

function App () {
  const test = async () => {
    const response = await api.post('auth/registerUser', { Email: 'abc@abc.com', Password: '12345678' })
    console.log(response)
  }

  useEffect(() => {
    test()
    console.log('hello')
  }, [])
  return (
    <div className='App'>
      <NavBar />
      <header className='App-header'>
        <h1>Keep Up</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;
