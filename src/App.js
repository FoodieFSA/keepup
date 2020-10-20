import './Styles/App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'

import Routes from './routes'
function App () {
  return (
    <div className='App'>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
