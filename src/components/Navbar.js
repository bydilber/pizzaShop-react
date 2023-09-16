import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/Menu'>Menu</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar;
