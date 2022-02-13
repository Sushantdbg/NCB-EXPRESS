import React from 'react';

export default function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item ms-auto">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link" href="Services.html">Services</a>
          </li>

          <li className="nav-item ms-auto">
            <a className="nav-link" href="FAQ.html">FAQ</a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link" href="AboutPage.html">About</a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link" href="index.html#anchor2footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
