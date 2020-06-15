import React, { Component } from 'react';
import ReactDOM from "react-dom"
import axios from "axios"
import './App.css';

import Prompt from "./components/Prompt"

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      triviaData: [{
        'category': "",
        'question':{__html: ''},
        'choices': [{__html: ''}, {__html: ''}, {__html: ''}, {__html: ''}],
        'correct': {__html: ''},
      }],
      correct: 0,
      incorrect: 0,
    }

    // this.updateCorrect = this.updateCorrect.bind(this);
    // this.updateIncorrect = this.updateIncorrect.bind(this);
    // this.resetSession = this.resetSession.bind(this);
  }

  getQuestions(){
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
      .then(resp => {
        console.log(resp)
        const triviaData = resp.data.results[0]
        const data = [{
          'category': triviaData.category,
          'question': {__html: triviaData.question},
          'choices': [
            {__html: triviaData.correct_answer},
            {__html: triviaData.incorrect_answers[0]},
            {__html: triviaData.incorrect_answers[1]},
            {__html: triviaData.incorrect_answers[2]}
        ],
        'correct': {__html: triviaData.correct_answer}
        }]

        let randomize = data[0].choices;
      let position = randomize.length, temp, random;

      while (0 !== position) {

        random = Math.floor(Math.random() * position);
        position -= 1;

        temp = randomize[position];
        randomize[position] = randomize[random];
        randomize[random] = temp;
      }  
      data[0].choices = randomize;

      this.setState({
        triviaData: data
      })
    }).catch(err => {
        console.log('Error: ', err)
      })
  }

  componentDidMount(){
    this.getQuestions()
  }

  render(){
    return(
      <div className="container">
        <h1>TrivKalf</h1>
        <Prompt data={this.state}/>
      </div>
    )
  }
}

export default App;
