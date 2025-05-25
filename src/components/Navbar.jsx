import React from "react";
import '../styles/Navbar.css';
import { scrollToSection } from '../utils/scrollToSection';

import { Link } from 'react-router-dom';


function Navbar(){
    return(
    <>

<nav className="navbar navbar-expand-lg bg-dark fixed-top " role="navigation" aria-label="main navigation">
<div className="container-fluid d-flex justify-content-between align-items-center">



<Link to="/" className="navbar-brand brand">MindHaven</Link>
  <div className="d-lg-none ms-auto">

  <button
  className="navbar-toggler navbar-toggler-icon-white d-lg-none"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#mobileNav"
  aria-controls="mobileNav"
>
  <span className="navbar-toggler-icon"></span>
</button>
</div>

  <div className="d-none d-lg-flex gap-6 justify-content-center">


  <ul className="nav nav-pills ">
    <li className="nav-item">
      <a className="nav-link" onClick={() => scrollToSection('features')} href="#features" data-bs-dismiss="offcanvas">Features</a>
    </li>
   
    <li className="nav-item">
      <a className="nav-link" href="#faq"  onClick={() => scrollToSection('faq')}>FAQ</a>
    </li>
   
    
  </ul>

  </div>

    <div className=" d-none d-lg-flex gap-2">
    <Link to="/login"><button className="btn login">Login</button></Link>
<Link to="/signup"><button className="btn signup">Sign up</button></Link>

</div>
    </div>

  

    </nav>
    <div
  className="offcanvas offcanvas-end bg-dark text-white"
  tabIndex="-1"
  id="mobileNav"
  aria-labelledby="mobileNavLabel"
>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="mobileNavLabel" href="/">MindHaven</h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div className="offcanvas-body d-flex flex-column gap-3">
    <a href="/" className="nav-link">Features</a>
    <a href="/" className="nav-link">FAQ</a>
    <hr className="bg-white" />
    <Link to="/login"><button className="btn login">Login</button></Link>
    <Link to="/signup"><button className="btn signup">Sign up</button></Link>
  </div>
</div>
    </>


)
}

export default Navbar