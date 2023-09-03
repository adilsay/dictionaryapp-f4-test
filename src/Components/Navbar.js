import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Dictionary App</h2>
        <div className='right-nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/history" >History</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar