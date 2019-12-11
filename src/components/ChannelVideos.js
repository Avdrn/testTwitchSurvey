import React, { Component } from 'react';
import api from "../api"
import {Link} from "react-router-dom";


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
        {this.state.videos ?
        <>
        {this.state.videos.map((videoArray) => {
          return (
          <Link to={`/DisplayVideo/${videoArray._id}`} >
              <div>
                <h3>{videoArray.channel.display_name}</h3>
                <img src={videoArray.preview.medium} alt="vidPreview"/>
              </div>
          </Link> 
          )
        })}
        </>
        : null}

      </div>
    )
}

}