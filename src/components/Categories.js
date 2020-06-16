import React, { Component } from "react"
import axios from "axios"
import Select from "react-select"

const options = [
    {value: "10", label: 'Books'},
    {value: "11", label: 'Film'},
    {value: "12", label: 'Music'},
    {value: "13", label: 'Musicals & Theatre'}
]

class Categories extends Component {
    state= {
        selectedOption: null
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        },
        ()=> console.log(`Option selected:`, this.state.selectedOption))
    }
    render(){
        const {selectedOption} = this.state
        return(
            <Select
                options={options}
                onChange={this.handleChange}
                value={selectedOption}
            />
        )
    }
}

    
//     switchCategory = (category = "13") => {
//         axios.get(`https://opentdb.com/api.php?amount=1&category=${category}`)
//             .then(resp => {
//                 console.log(resp.data.results)
//             })



export default Categories