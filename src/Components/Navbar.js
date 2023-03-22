import React from 'react';
import propType from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.abouttext}
                </a>
              </li>
            </ul>
    
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-3">
              <li className="nav-item ">
              <button type="button" className="btn btn-primary my-2" onClick={props.red}style={{backgroundColor: 'red',margin: 2}}>red</button>
              </li>
              <li className="nav-item ">
                <button type="button" className="btn btn-primary my-2" onClick={props.blue}style={{backgroundColor: 'blue',margin: 2}}>blue</button></li>
            </ul>
            

              <div className={`form-check form-switch text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label nav-item" htmlFor="flexSwitchCheckDefault">{props.mode} </label>
              </div>

          </div>
        </div>
      </nav>
    
  );
}

Navbar.defaultProps = {
  title: 'title is here',
  abouttext: 'AbouT',
};
