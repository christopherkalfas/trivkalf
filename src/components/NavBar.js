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
                <ul className="nav-container">
                    <li><NavItem className="nav-btn" item="Random" tolink="/playall" activec={this.activeitem}></NavItem></li>
                    <li><NavItem className="nav-btn" item="Pick Category " tolink="/play-category" activec={this.activeitem}></NavItem></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar