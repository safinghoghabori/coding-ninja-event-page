import React from 'react'

// components imports
import CNLOGO from '../../images/CNLOGO.svg'
import './navbar.css'

const Navbar = () => {

    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src={CNLOGO} alt='coding ninja' />
            </div>
            <ul>
                <li>My Classroom</li>
                <li className='login-btn'>Login</li>
            </ul>
        </nav>
    )

}

export default Navbar;