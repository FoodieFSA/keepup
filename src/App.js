import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'

function App () {
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

export default App
