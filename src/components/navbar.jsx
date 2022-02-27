import React, { useState } from 'react';
import logo from '../images/nav_logo.png';

export default function Navbar() {


    const [isactive,setactive]=useState(false);

    const handleactive =()=>{
        setactive(!isactive);
    }


  return <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className={`nav_links ${isactive ? 'nav_active' : ''}`}>
            <li>Industries</li>
            <li>services</li>
            <li>company</li>
        </ul>

        <div onClick={handleactive} className={`hamburger ${ isactive?'nav_active':''}`}>
            <div className="ham_sticks s1"></div>
            <div className="ham_sticks s2"></div>
            <div className="ham_sticks s3"></div>
        </div>
    </div>
  
}
