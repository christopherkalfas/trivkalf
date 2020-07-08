import React, { Component } from 'react'
import Footer from './Footer'

class Round extends Component {
    constructor(){
        super()

        this.state={

        }
    }
 
    render(){
        return(
            <div className = "round-container">
                <div className="row">
                    <div className="column">
                        <h5>Correct:</h5>
                        <h5>Incorrect: </h5>
                    </div>
                    <div className="column">
                        <h5>{this.props.results.correct}</h5>
                        <h5>{this.props.results.incorrect}</h5>
                    </div>
                </div>
                <div className="restart">
                    <button  onClick={e => this.props.restartRound()}>Restart</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Round