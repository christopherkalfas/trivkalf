import React, { Component } from 'react'


class Prompt extends Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div className='question-prompt'>
                <div className="category">
                    <h3> Category:</h3>
                    <h4> {this.props.data.triviaData[0].category}</h4>
                </div>
                <div className = "question">
                    <h2>Question:</h2>
                    <h4 dangerouslySetInnerHTML={this.props.data.triviaData[0].question}></h4>
                </div>
            </div>
        )
    }
}

export default Prompt