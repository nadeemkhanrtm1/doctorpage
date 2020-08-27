import React from 'react';
import Logo from "../images/logo.png";
import david from "../images/david.jpg";

const Navbar = () => {
        return (
        <header>
            <nav className="navbar">
              <div className="logo_items">
                  <img src={Logo}></img>
                  <a>HOME</a>
                  <a>PROFILE</a>
                  <a>SCHEDULE APPOINTMENTS</a>
              </div>
              <div  className="profile_nav">
                  <p>Hello!<br/>
                  Dmitry Galkin</p>
                  <img src={david}></img>
              </div>
            </nav>
        </header>
        )
}
export default Navbar;