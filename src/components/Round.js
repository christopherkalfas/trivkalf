import React, { Component } from 'react'

class Round extends Component {
    constructor(){
        super()

        this.state={

        }
    }
 
    render(){
        return(
            <div className = "round-container">
                <p>Correct: {this.props.results.correct}</p>
                <p>Incorrect: {this.props.results.incorrect}</p>
                <button className="restart" onClick={e => this.props.restartRound()}>Restart</button>
            </div>
        )
    }
}

export default Round