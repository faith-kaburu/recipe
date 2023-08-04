import React from 'react';
import '../styles/Navbar.css'
import { Link } from "react-router-dom"



function Navbar({token, onLogout}) {
  return (

    <nav>


      <div className="logo">
        <img src="https://i.pinimg.com/236x/24/80/d8/2480d8f6a4e662142fcd009fb5f558ff.jpg" alt="Logo" />
      </div>


      <ul className="nav-links">
      {/* <li><a href="#">Tasty Trail</a></li> */}
        <li><Link to="/">Tasty Trail</Link></li>
        <li><Link to="/landingpage"></Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/myrecipes">My Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/profile">Profile</Link></li> */}
        <li><Link to="/">Logout</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
