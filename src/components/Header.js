import React from 'react';
import logo from '../StreamHatchet-logo.png';
import '../Stylesheet/Header.css';


const header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Stream Hatchet Mturk Survey</h1>
      <h3>You are ready to take this to the next level!</h3>
    </header>
  );
}

export default header;