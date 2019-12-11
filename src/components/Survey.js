import React, { Component } from 'react';
import '../Stylesheet/Survey.css';



//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";

export default class surveyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isCompleted: false };
        this.onCompleteComponent = this.onCompleteComponent.bind(this);
      }
      onCompleteComponent() {
        this.setState({ isCompleted: true });
      }
      render() {
        let json = {
            title: "Stream Hatchet Twitch Survey",
            showProgressBar: "top",
            pages: [
                {           
                    title: "About the Stream",
                    questions: [
                        {
                            type: "checkbox",
                            name: "streamContent",
                            title: "How would you describe the stream content?",
                            isRequired: true,
                            hasSelectAll: true,
                            hasNone: true,
                            noneText: "None of the above",
                            colCount: 1,
                            choicesOrder: "asc",
                            choices: [
                                "Family-friendly",
                                "Fandom",
                                "Informative",
                                "Instructive",
                                "Miscellaneous",
                                "Original",
                                "Pop culture",
                                "Retro Music",
                                "Software & Web",
                                "Tournaments",
                            ]
                        }, {
                            type: "checkbox",
                            name: "streamFeatures",
                            title: "What are the stream features?",
                            isRequired: true,
                            hasSelectAll: true,
                            hasNone: true,
                            noneText: "None of the above",
                            colCount: 1,
                            choicesOrder: "asc",
                            choices: [
                                "Fundraising",
                                "Giveaways",
                                "Music",
                                "Subtitles",
                                "Technical terms",
                            ],
                        }, {
                            type: "checkbox",
                            name: "streamVideo",
                            title: "Tell us more about the video?",
                            isRequired: true,
                            hasSelectAll: true,
                            hasNone: true,
                            noneText: "None of the above",
                            colCount: 1,
                            choicesOrder: "asc",
                            choices: [
                                "Handcam",
                                "No camera",
                                "No voice",
                            ],
                        },
                    ]
                }, {
                    title: "About the Streamer",
                    questions: [
                        {
                            type: "checkbox",
                            name: "streamers",
                            title: "What is the streamer doing?",
                            isRequired: true,
                            hasSelectAll: true,
                            hasNone: true,
                            noneText: "None of the above",
                            colCount: 1,
                            choicesOrder: "asc",
                            choices: [
                                "Food & Drink",
                                "Illustration",
                                "Inactive",
                                "Interactive streaming",
                                "Memes",
                                "Singing",
                                "Troll",
                        ],
                    },{
                            type: "checkbox",
                            name: "streamers",
                            title: "Do you know more about the streamer character?",
                            isRequired: true,
                            hasSelectAll: true,
                            hasNone: true,
                            noneText: "None of the above",
                            colCount: 1,
                            choicesOrder: "asc",
                            choices: [
                                  "Feminism",
                                  "Game’s developer",
                                  "LGBTQIA",
                                  "Role play",
                                  "Skilled",
                                ],
                    },
                    ]
            }
          ]
        };

        var surveyRender = !this.state.isCompleted ? (
          <Survey.Survey
            json={json}
            showCompletedPage={true}
            onComplete={this.onCompleteComponent}
          />
        ) : null;
        var onCompleteComponent = this.state.isCompleted ? (
            <div>
                <div>Thanks for completing the survey about this video. Not enought, you want to see another video? Click on next!</div>
                 <button className="ButtonNext" onClick="activateLasers()">
                    Next
                </button>
            </div>
          
        ) : null;
        return (
          <div className="Survey">
            {surveyRender}
            {onCompleteComponent}
          </div>
        );
      }
    }

