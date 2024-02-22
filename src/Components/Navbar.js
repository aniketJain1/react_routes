import { NavLink } from 'react-router-dom'
// NavLink gives Active class funcationality, not Link Component


import React from 'react'

function Navbar() {
    const NavLinkCSS = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '32px' : '24px',

        }
    }
  return (
    <nav>
        <NavLink style={NavLinkCSS} to='/'> Home </NavLink>
        <NavLink style={NavLinkCSS} to='/about'> About </NavLink>
        <NavLink style={NavLinkCSS} to='/contact'> Contact </NavLink>
    </nav>
  )
}

export default Navbar