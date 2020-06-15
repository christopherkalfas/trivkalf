import React, { Component } from "react"

class Answer extends Component {
    constructor(props){
        super(props)

        this.state={

        }

        this.setAnswer = this.setAnswer.bind(this)
    
    }

    revealAnswer(){
        const choices = document.querySelectorAll('choice')
        const answer = this.props.data.triviaData[0].correct.__html

       choices.forEach((e) => {
            if (e.innerHTML === answer){
                e.className= "right"

                setTimeout(()=> {
                    e.className = "beige"
                }, 500)
            }
        })
    }
    setAnswer(e){
        const clicked = e.target
        const answer = this.props.data.triviaData[0].correct.__html

        this.revealAnswer()

        if (clicked.innerHTML === answer) {
            e.target.className = "correct"
            this.props.updateCorrect()

            setTimeout(()=> {
                clicked.className = "beige"
            },500)
        } else {
            e.target.className = "incorrect"
            this.props.updateIncorrect()

            setTimeout(()=> {
                clicked.className="beige"
            }, 500)
        }
    }

    render(){
        return(
            <div className="options-coontainer">
                <button  onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[0]}></button>
                <button  onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[1]}></button>
                <button  onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[2]}></button>
                <button  onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[3]}></button>
            </div>
        )
    }
}

export default Answer