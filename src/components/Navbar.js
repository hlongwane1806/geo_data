import React from 'react';
import {FaGithub} from 'react-icons/fa';
const Navbar = ()=>{
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">GeoData</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto justify-content-end">
        
        <li className="nav-item">
          <a className="nav-link" target = "_blank" href="https://github.com/hlongwane1806/geo_data"><FaGithub className="nav-icon"/></a>
        </li>
        
        
      </ul>
      
    </div>
  </nav>)

}

export default Navbar;