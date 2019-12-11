import React, { Component } from 'react';
import api from "../api"
import {Link} from "react-router-dom";
import '../Stylesheet/Channel.css';



export default class ChannelVideo extends Component {
  constructor(){
    super()
    this.state = {
        videos: [],
    }
  }

  componentDidMount() {
    const {params} = this.props.match;
    const channelId = params._id;

    console.log(channelId)

    api.get(`https://api.twitch.tv/kraken/channels/${channelId}/videos`)
    .then(response => {
      console.log(response);
      this.setState({
        videos: response.data.videos})
    })
      console.log(this.state.videos)
  }



  render() {
    return (
      <div>
          <h1 className="Select">Select the Video you wanna watch</h1>
      <div className="Channel-container">
        {this.state.videos ?
        <>
        {this.state.videos.map((videoArray, key) => {
          return (
          <div key={key} className="Channel-box">
            <Link to={`/DisplayVideo/${videoArray._id}`} >
                <div>
                  <h3 className="Channel-title">{videoArray.title}</h3>
                  <img src={videoArray.preview.medium} alt="vidPreview"/>
                </div>
            </Link> 
          </div>
          )
        })}
        </>
        : null}

      </div>
      </div>
    )
}

}