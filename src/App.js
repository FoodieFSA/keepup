import { useEffect } from 'react'
import './Styles/App.css'
import Footer from './Components/Footer'
import NavBar from './Navigation/NavBar'
import Routes from './Navigation/routes'
import Api from './Api'

function App () {
  useEffect(() => {
    Api.get('test').then(res => {
      console.log(res)
    })
  })
  return (
    <div className='App'>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
