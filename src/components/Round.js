import React, { Component} from 'react'

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
            </div>
        )
    }
}

export default Round