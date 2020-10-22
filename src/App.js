import { useEffect } from 'react'
import './Styles/App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Routes from './routes'
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
