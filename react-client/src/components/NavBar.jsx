import React from "react";
import WorkersLogo from "./workersLogo.jsx";
import SearchByName from "./workers.jsx";
import axios from "axios";
import $ from "jquery";
import {
 Navbar,
 Nav,
 NavItem,
 FormGroup,
 FormControl,
 Button
} from "react-bootstrap"; // For Designing
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactUs from "./contactUs.jsx";
import About from "./About.jsx";
import Sign from "./Signup.jsx";



class NavBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     name: "", //search bar
     workers: [] //searched workers
   };
 }

 // For the search
 getWorkersByName() {
   var that = this;
   axios.post("/name", { name: this.state.name }).then(function (res) {
     that.setState({
       workers: res.data
     });
     $('#textInbox').val('') //to empty the input box
     $('#logos').hide() //categories buttons on index file
   });
 }

  //get the value of the search bar
  getUserName(e) {
    this.setState({
      name: e.target.value //search bar value
    });
  }

  hideCategories() {
    console.log('here')
    $('#logos').hide() //categories buttons on index file
  }
  
  render() {
    return (
      <Router>
        <div>
       
          
                <div>
                
                  <WorkersLogo
                    handleWorkersButton={this.props.handleWorkersButton}
                  />
                </div>
           
        
      </div>
    </Router>)
  }
}

export default NavBar;