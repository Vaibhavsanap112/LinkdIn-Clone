import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faGraduationCap, faBriefcase, faUsers } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/linkdinlogo.jpg";


import "../../../src/App.css";

function Navbar() {
  return (
   
       <div className="App">
      <div className="navbar w-full">
        <img className="logo" src={logo} alt="Logo" />
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon className="inc" icon={faUsers} />
            <span>Network</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon className="inc" icon={faNewspaper} />
            <span>News</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon className="inc" icon={faGraduationCap} />
            <span>Learning</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon className="inc" icon={faBriefcase} />
            <span>Jobs</span>

          </div>
          
          
          <div className="join">
            <p>Join Now</p>
          </div>
          <div className="sign">
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Navbar;
