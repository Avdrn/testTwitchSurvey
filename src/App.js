import React, { Component } from 'react';
import Header from './components/Header.js'
import Streams from './components/Streams'
import ChannelVideo from './components/ChannetVideo'
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {

    // var express = require('express');
    // var cors = require('cors');
    // var app = express();

    // app.use(cors());

    return (
      <div className="App">
        <Header></Header>
      
        <Switch>
          <Route exact path="/" component={Streams} /> 
          <Route path="/:_id" component={ChannelVideo} />  
        </Switch>
      </div>
    );
  }
}

export default App;
