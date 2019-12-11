import React, { Component } from 'react';
import Survey from './Survey'

 
export default class DisplayVideo extends Component {

    constructor(){
      super()
        this.state = {
          videoId : [],
      
      }
    }
    componentDidMount() {
        const {params} = this.props.match;
        this.setState({
            videoId: params._id
          })
          console.log(this.state.videoId)    
    }

    
     render() {
        return (
            <div>
                <iframe
                    title="video"
                    src={`https://player.twitch.tv/?video=${this.state.videoId}`}
                    height="<height>"
                    width="<width>"
                    frameBorder="<frameborder>"
                    scrolling="<scrolling>"
                    allowFullScreen="<allowfullscreen>">
                </iframe>
                <Survey></Survey>
                
            </div>
  )
}}
