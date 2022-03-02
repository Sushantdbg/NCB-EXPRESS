import React from 'react';

export default function Navbar(){
    return(
        <>
        <nav>
        <a className="navbar-brand" href="#">
            <img src={process.env.PUBLIC_URL + '/ncblogo1.svg.png'} alt=""  className="d-inline-block align-text-top" /></a>
            <h3 className="nav--logo_text">NCB Express</h3>
            <h4 className="nav--title"><a href="#" className="language-select">Select Language</a></h4>
            <h4 className="nav--title"><a href="#" className="auth-login-link">Authorised login</a></h4>
            <img src={process.env.PUBLIC_URL + '/key-lock.png'} className="nav--icon--login" />
        </nav>
        </>
    )
}
