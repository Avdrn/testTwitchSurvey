import React, { Component } from 'react';
import Header from './components/Header.js'
import Streams from './components/Streams'
import ChannelVideo from './components/ChannelVideos'
import {Route, Switch} from "react-router-dom";
import DisplayVideo from './components/DisplayVideo'



class App extends Component {
  render() {

    return (
      <div>
        <Header></Header>
      
        <Switch>
          <Route exact path="/" component={Streams} /> 
          <Route path="/Channel/:_id" component={ChannelVideo} /> 
          <Route path="/DisplayVideo/:_id" component={DisplayVideo} />  
 
        </Switch>
      </div>
    );
  }
}

export default App;
