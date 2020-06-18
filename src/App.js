import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
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
          <AllCategories />
        {/* <Router>
          <Navbar />
          <Route exact path="/playall">
            <AllCategories />
          </Route>
          <Route exact path="play-category">
            <CategoryContainer />
          </Route>
        </Router> */}
        
      </div>
    )
  }
}

export default App;
