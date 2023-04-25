import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="Navbar">
   
   <NavLink to="/home">Home</NavLink>
   <NavLink to="/Massages">TotalMassages</NavLink>
   <NavLink to="/CallLogs">TotalCallLogs</NavLink>
   <NavLink to="/Contacts">TotalContacts</NavLink>
   <NavLink to="/Images">TotalImages</NavLink>
   <NavLink to="/Apps">TotalApps</NavLink>
   <NavLink to="/Battary">Battary</NavLink>

    </div>
  );
}

export default Navbar;
