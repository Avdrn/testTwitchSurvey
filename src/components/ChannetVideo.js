import React, { Component } from 'react';
import axios from 'axios';
import Survey from './Survey'


export default class ChannelVideo extends Component {
  constructor(){
    super()
    this.state = {
        video: undefined,
        firstIndex : 0,
        secondIndex : 1,
        clicks: 0,
    }
  }

  componentDidMount() {
    const {params} = this.props.match;
    const channelId = params._id

    axios.get(`https://api.twitch.tv/kraken/channels/${channelId}/videos`)
    .then(response => {
      this.setState({video: response.data})
    })
  }

  IncrementItem = () => {
    let copiedStreams = [].concat(this.state.streams);

    this.setState({ 
      clicks: this.state.clicks + 1,
      firstIndex: this.state.firstIndex + 1,
      secondIndex : this.state.secondIndex + 1,
      singleStream: copiedStreams.slice(this.state.firstIndex, this.state.secondIndex)
    })
    console.log(this.state.click)
    console.log(this.state.fcdex, this.state.secondIndex)

  }

  render() {
    return(
    <div>
       {this.state.video ?
          <>
          <h1>Hello, you will watch {this.state.videos.channel.display_name}</h1>
          <h2>Click in this link to start the video { this.state.videos.url}</h2>
          <img src={this.state.videos.preview.medium} alt="videoImg"/>
          </>
          : null}
          <Survey></Survey>
    </div>
    )
  }
}