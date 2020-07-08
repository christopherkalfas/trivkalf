import React, { Component } from "react"

class Answer extends Component {
    constructor(props){
        super(props)

        this.state={

        }

        this.setAnswer = this.setAnswer.bind(this)
    
    }

    revealAnswer(){
        const choices = document.querySelectorAll('.options-container button')
        const answer = this.props.data.triviaData[0].correct.__html

       choices.forEach((e) => {
            if (e.innerHTML === answer){
                e.className= "correct-color"

                setTimeout(()=> {
                    e.className = "beige"
                }, 800)
            }
        })
    }
    setAnswer(e){
        const clicked = e.target
        const answer = this.props.data.triviaData[0].correct.__html

        this.revealAnswer()

        if (clicked.innerHTML === answer) {
            e.target.className = "correct-color"
            this.props.updateCorrect()

            setTimeout(()=> {
                clicked.className = "beige"
            },800)
        } else {
            e.target.className = "incorrect-color"
            this.props.updateIncorrect()

            setTimeout(()=> {
                clicked.className="beige"
            }, 800)
        }
    }

    render(){
        return(
            <div className="options-container">
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[0]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[1]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[2]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[3]}></button>
            </div>
        )
    }
}

export default Answer