import React, { Component } from 'react'
import {Link} from "react-router-dom";
import api from "../api"
import '../Stylesheet/Streams.css';
import { loadProgressBar } from 'axios-progress-bar';

loadProgressBar()

export default class Streams extends Component {

  constructor(){
    super()
      this.state = {
        streams : [],
        firstIndex : 0,
        secondIndex : 1,
        clicks: 0,
        singleStream : [],
    }
  }

// Load all the streams and set the current one

  componentDidMount() {
    api.get("https://api.twitch.tv/kraken/streams/")
    .then(response => {
      this.setState({
        streams: response.data.streams,
        singleStream: response.data.streams.slice(0, 1),

      })
    })
  }


// Change the index of the slice in 'SingleStream state' to change the displayed video upon click

  IncrementItem = () => {
    let copiedStreams = [].concat(this.state.streams);

    this.setState({ 
      clicks: this.state.clicks + 1,
      firstIndex: this.state.firstIndex + 1,
      secondIndex : this.state.secondIndex + 1,
    })
    this.setState({  
    singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
    })
    console.log(this.state.firstIndex, this.state.secondIndex)
    console.log(this.state.singleStream)
    console.log(this.state.clicks)

  }
  
  DecreaseItem = () => {
    let copiedStreams = [].concat(this.state.streams);

    this.setState({ 
      clicks: this.state.clicks - 1,
      firstIndex: this.state.firstIndex - 1,
      secondIndex : this.state.secondIndex - 1,
      singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
    });
  }


  render() {

  return (
    <div>
      <h1 className="Select">Select the Channel of one of the actual streams</h1>
      <div className="Stream-container">
        {this.state.streams ?
        <>
        {this.state.streams.map((streamsArray, key) => {
          return (
            <div key={key} className="Stream-box">
            <Link to={`/Channel/${streamsArray.channel._id}`} >
                <h2>{streamsArray.game}</h2>
                <table>
                  <thead>
                      <tr>
                          <th colSpan="2">{streamsArray.channel.display_name}</th>
                      </tr>
                  </thead>
                  <tbody>              
                      <tr>
                        <td>Views</td>
                        <td>{streamsArray.channel.views}</td>
                      </tr>                        
                      <tr>
                          <td>Followers</td>
                          <td>{streamsArray.channel.followers}</td>
                      </tr>
                  </tbody>                    
                </table>
                <img className="Stream-image" src={streamsArray.preview.medium} alt="SreamImage"/>
              </Link>
            </div>
          )
        })}
       </>
      : null}
    </div>
  </div>
  )
}}