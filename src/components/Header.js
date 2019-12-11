import React from 'react';
import logo from '../StreamHatchet-logo.png';
import '../Stylesheet/Header.css';


const header = () => {
  return (
    <header className="App-header">
      <div className="App-underHeader">
        <h1 className="App-title">Welcome to <img src={logo} className="App-logo" alt="logo" /> Mturk Survey</h1>
      </div>
    
    <div>
      <h3>You are ready to take this to the next level!</h3>
    </div>
   </header>
  );
}

export default header;