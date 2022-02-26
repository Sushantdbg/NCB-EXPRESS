import React from 'react';

export default function Navbar(){
    return(
        <>
        <div className="navbar--all">
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={process.env.PUBLIC_URL + '/ncblogo.webp'} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    NCB EXPRESS</a></div></nav>
        </div>
        </>
    )
}