import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import axios from "axios"
import './App.css';

import Header from "./components/Header"


import Navbar from './components/NavBar';
import AllCategories from './components/AllCategories';
import CategoryContainer from './components/select/CategoryContainer';


class App extends Component {
  

  render(){
    return(
      <div className="background">
        <Header />
          {/* <AllCategories /> */}
        <Router>
          <Navbar />
        <Switch>
          
          <Route exact path="/playall" exact component={AllCategories} />
           
          <Route  path="/play-category" exact component={CategoryContainer}/>
      
          </Switch>
        </Router>

        
      </div>
    )
  }
}

export default App;
