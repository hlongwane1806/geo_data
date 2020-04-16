import React from 'react';
import {FaGithub} from 'react-icons/fa';
const Navbar = ()=>{
    return(<nav className="navbar mb-2 fixed-top navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">GeoData</a>
   
    <div className="" id="navbarNavGithub">
      <ul className="navbar-nav mr-2">
        
        <li className="nav-item">
          <a className="nav-link" target = "_blank" href="https://github.com/hlongwane1806/geo_data"><FaGithub className="nav-icon"/></a>
        </li>
        
        
      </ul>
      
    </div>
  </nav>)

}

export default Navbar;