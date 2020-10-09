import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import LogIn from './Components/Login';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Keep Up</h1>
        <SignUp />
      </header>
      <Footer />
    </div>
  );
}

export default App;
