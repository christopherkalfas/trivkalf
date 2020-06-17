import React, { Component } from "react"
import axios from "axios"
import Select from "react-select/async"

const options = [
        {value: "10", label: 'Books'},
        {value: "11", label: 'Film'},
        {value: "12", label: 'Music'},
        {value: "13", label: 'Musicals & Theatre'}
    ]

class SelectCategory extends Component {
    constructor(props, context){
        super(props, context)

        this.state = {
            selectedOption: null
        }
    }

    

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption.value);
      }
      render() {
        const { selectedOption } = this.state;
    
        return (
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        );
      }
}

export default SelectCategory

// import React, { Component } from "react"
// import Select from "react-select"

// const options = [
//     {value: "10", label: 'Books'},
//     {value: "11", label: 'Film'},
//     {value: "12", label: 'Music'},
//     {value: "13", label: 'Musicals & Theatre'}
// ]

// class SelectCategory extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             selectedOption: null
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange = (selectedOption) => {
//         this.setState({ selectedOption });
//         console.log(`Option selected:`, selectedOption.value);
//       }
//       render() {
//         const { selectedOption } = this.state;
    
//         return (
//           <Select
//             value={selectedOption}
//             onChange={this.handleChange}
//             options={options}
//           />
//         );
//       }
// }

// export default SelectCategory