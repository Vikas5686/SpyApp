import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="Navbar">
              {/* <NavLink className="nav-link" to="/Massages">TotalMassages</NavLink>
              <NavLink className="nav-link" to="/home">Home</NavLink>
              <NavLink className="nav-link" to="/CallLogs">TotalCallLogs</NavLink>
              <NavLink className="nav-link" to="/Contacts">TotalContacts</NavLink>
              <NavLink className="nav-link" to="/Images">TotalImages</NavLink>
              <NavLink className="nav-link" to="/Apps">TotalApps</NavLink>
              <NavLink className="nav-link disable" >Battary</NavLink> */}



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{color:"aqua"}} href="#">Spy App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link"  to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Massages">TotalMassages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/CallLogs">TotalCallLogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contacts">TotalContacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Images">TotalImages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Apps">TotalApps</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disable" >Battary</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>
          
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
