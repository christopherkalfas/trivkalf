import React, { Component } from "react"
import axios from "axios"
import Select from "react-select"
import Prompt from "./Prompt"
import Answer from "./Answer"
import Round from "./Round"


const options = [
    {value: "10", label: 'Books'},
    {value: "11", label: 'Film'},
    {value: "12", label: 'Music'},
    {value: "13", label: 'Musicals & Theatre'}
]

class Categories extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            selectedOption: null,
            triviaData: [{
                'category': "",
                'question':{__html: ''},
                'choices': [{__html: ''}, {__html: ''}, {__html: ''}, {__html: ''}],
                'correct': {__html: ''},
            }],
                correct: 0,
                incorrect: 0,
        }  
        this.updateCorrect = this.updateCorrect.bind(this);
        this.updateIncorrect = this.updateIncorrect.bind(this);
        this.restartRound = this.restartRound.bind(this);
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption.value);
    }

    getNewCategory(selectedOption){
        axios.get(`https://opentdb.com/api.php?amount=1&category=${selectedOption}`)
            .then(resp => {
                console.log(resp.data.results)
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

    

    updateCorrect(){
        this.setState((prevState, props)=> ({
            correct: this.state.correct + 1
        }))

        setTimeout(()=> {
            this.getQuestions()
        }, 500)
   }

    updateIncorrect(){
        this.setState((prevState, props)=> ({
        incorrect: this.state.incorrect + 1
    }))

        setTimeout(()=> {
            this.getQuestions()
        }, 500)
    }

    restartRound(){
        this.setState((prevState,props) => ({
            correct: 0, 
            incorrect: 0
        }))
    }
    render(){
        const {selectedOption} = this.state
        return(
            <div className="single-cat-container">
       
                {/* <form className="category-select-form" onSubmit={this.handleSubmit}>
                <Select
                    options={options}
                    onChange={this.handleChange}
                    value={selectedOption}
                />
                </form> */}
                <div className="game-container">
                    <div className="sub-container">
                        <Prompt data={this.state}/>
                        <Answer 
                        data={this.state}
                        updateCorrect={this.updateCorrect.bind(this)}
                        updateIncorrect={this.updateIncorrect.bind(this)}  
                        />
                    </div>
                        <Round results={this.state} restartRound={this.restartRound.bind(this)} />
                    </div>
            </div>
        )
    }
}

    




export default Categories