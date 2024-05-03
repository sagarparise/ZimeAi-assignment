import React from 'react';
import { NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h2>Posts</h2>
      <div className='list '>
        <NavLink to='/' className='list-item'>Home</NavLink>
        <NavLink to='/table' className='list-item'>Table</NavLink>
      </div>
    </div>
  )
}

export default Navbar