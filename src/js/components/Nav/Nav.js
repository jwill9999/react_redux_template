import React from 'react'
import {Link} from "react-router";
import './Nav.scss';

const Nav = (props) => {

  return (

    <div className='clearfix'  id='header'>
           <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={"/home"} className="navbar-brand" activeClassName={"active"}>React Redux Template</Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to={"/home"} activeClassName={"active"}>Home</Link></li>
            <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
            <li><Link to={"/form"} activeClassName={"active"}>Form</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>

  )
}



module.exports =  Nav;