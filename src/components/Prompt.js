import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Prompt extends Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div className='question-prompt'>
                <h3> Category:</h3>
                <p> {this.props.data.triviaData[0].category}</p>
                <h2>Question:</h2>
                <p dangerouslySetInnerHTML={this.props.data.triviaData[0].question}></p>
            </div>
        )
    }
}

export default Prompt