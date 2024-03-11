import { NavLink, useNavigate } from 'react-router-dom'
// NavLink gives Active class funcationality, not Link Component
import React from 'react'

function SidebarC() {
    const NavLinkCSS = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '30px' : '22px',
        }
    }
    const navigate = useNavigate();
    const btnStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white'
    }
  return (
    <nav className='main-sidebar bg-dark' >
        <NavLink style={NavLinkCSS} to='/'> Home </NavLink>
        <NavLink style={NavLinkCSS} to='/Products'> Products </NavLink>
        <NavLink style={NavLinkCSS} to='/about'> About </NavLink>
        <NavLink style={NavLinkCSS} to='/contact'> Contact </NavLink>
        <NavLink style={NavLinkCSS} to='/search'> Search </NavLink>
        <NavLink style={NavLinkCSS} to='/users'> Users </NavLink>
        <NavLink style={NavLinkCSS} to='/create'> CRUD  </NavLink>
        {/* <NavLink style={NavLinkCSS} to='/lazy'> LazyEx </NavLink> */}
        <NavLink style={NavLinkCSS} to='/validation1'> Validation </NavLink>
        <NavLink style={NavLinkCSS} to='/formikyup'> FormikYup </NavLink>
        <NavLink style={NavLinkCSS} to='/formikyup2'> FormikYup2 </NavLink>
        <NavLink style={NavLinkCSS} to='/detailsform'> Details Form </NavLink>
        <NavLink style={NavLinkCSS} to='/image'> Image </NavLink>
        <NavLink style={NavLinkCSS} to='/cards'> Cards </NavLink>
        <NavLink style={NavLinkCSS} to='/reducer'> Reducer Game </NavLink>
        <button onClick={() => navigate(-1)} style={btnStyle}>Go Back</button>
    </nav>
  )
}

export default SidebarC