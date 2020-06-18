import React, { Component } from "react"
import NavItem from "./NavItem"

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state={
            "NavItemActive": ""
        }
    }

    activeitem=(x)=> {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render(){
        return(
            <nav>
                <ul>
                    <NavItem item="Play with all Categories" tolink="/playall" activec={this.activeitem}></NavItem>
                    <NavItem item="Select a Category " tolink="/play-category" activec={this.activeitem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar