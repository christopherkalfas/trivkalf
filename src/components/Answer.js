import React, { Component } from "react"

class Answer extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    
    }

    revealAnswer(){
        const answerOptions = document.getElementsByClassName('answer button')
        const correctAnswer = this.props.data.triviaData[0].correct.__html

        answerOptions.forEach(e => {
            if (e.innerHTML === correctAnswer){
                e.className= "right"

                setTimeout(()=> {
                    e.className = "beige"
                }, 500)
            }
        })
    }
    setAnswer(e){
        const clicked = e.target
        const correctAnswer = this.props.data.triviaData[0].correct.__html

        this.revealAnswer()

        if (clicked.innerHTML === correctAnswer) {
            e.target.className = "right"
            // this.props.updateCorrect()

            setTimeout(()=> {
                clicked.className = "beige"
            },500)
        } else {
            e.target.className = "wrong"
            // this.props.updateWrong()

            setTimeout(()=> {
                clicked.className="beige"
            }, 500)
        }
    }

    render(){
        return(
            <div className="answer">
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[0]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[1]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[2]}></button>
                <button onClick={e => this.setAnswer(e)} dangerouslySetInnerHTML={this.props.data.triviaData[0].choices[3]}></button>
            </div>
        )
    }
}

export default Answer